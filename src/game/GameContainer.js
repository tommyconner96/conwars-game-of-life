import React, { useRef, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { gridState, runningState, counterState, sizeState } from "../recoilState/index"
import produce from "immer"
import * as Grid from "../GridDefaults"
import GameGrid from "./GameGrid"
import GameControls from "./GameControls"

export default function(props) {
  const [grid, setGrid] = useRecoilState(gridState)
  const [counter, setCounter] = useRecoilState(counterState)
  const [running, setRunning] = useRecoilState(runningState)
  const gridSize = useRecoilValue(sizeState)
  const numCols = gridSize.updatedColumns
  const numRows = gridSize.updatedRows

  // reset grid upon gridSize change
  useEffect(() => {
    // console.log(gridSize)
    resetGrid()
  }, [gridSize])

  useEffect(
    () => {
      if (running === true) {
        setTimeout(runGame, 200)
      }
    },
    [grid]
  )
  // takes two args, (r,c) represents rows and columns
  const generateEmptyGrid = (r, c) => {
    const rows = []
    for (let i = 0; i < r; i++) {
      rows.push(Array.from(Array(c), () => 0))
    }
  
    return rows
  }
  // resetGrid - passed to GameControls as a prop
  // it is called in the useEffect here upon gridSize change
  // and also when the clear button from GameControls is pressed
  const resetGrid = () => {
    setGrid(generateEmptyGrid(numRows, numCols))
    setCounter(0)
    setRunning(false)
  }

  // randomizeGrid - passed to GameControls as a prop
  // used for the "random" button
  const randomizeGrid = () => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      )
    }

    setGrid(rows)
    setCounter(0)
  }
  // defining our ref for running status of the game
  const runningRef = useRef(running)
  runningRef.current = running
// passed to GameControls as a prop - used to begin the game
  const run = () => {
    setRunning(!running)
    if (!running) {
      runningRef.current = true
      runGame()
    }
  }

  const runGame = () => {
    if (!runningRef.current) {
      return
    } else {
      setGrid(g => {
        return produce(g, gridCopy => {
          for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
              let neighbors = 0
              Grid.operations.forEach(([x, y]) => {
                const newI = i + x
                const newJ = j + y
                if (
                  newI >= 0 &&
                  newI < numRows &&
                  newJ >= 0 &&
                  newJ < numCols
                ) {
                  neighbors += g[newI][newJ]
                }
              })
              // game rules/logic
              if (neighbors < 2 || neighbors > 3) {
                gridCopy[i][j] = 0
              } else if (g[i][j] === 0 && neighbors === 3) {
                gridCopy[i][j] = 1
              }
            }
          }
        })
      })
    }
  }

  return (
    <div>
      <GameControls
        run={run}
        resetGrid={resetGrid}
        randomizeGrid={randomizeGrid}
      />
      <GameGrid />
      <p>
        current generation: {counter}
      </p>
    </div>
  )
}
