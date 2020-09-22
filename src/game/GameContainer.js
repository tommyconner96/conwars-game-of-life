import React, { useState, useCallback, useRef, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { gridState, runningState, counterState } from "../recoilState/index"
import produce from "immer"
import * as Grid from "../GridDefaults"
import GameGrid from "./GameGrid"
import GameControls from "./GameControls"
import useInterval from "../hooks/useInterval"

export default function() {
  const [grid, setGrid] = useRecoilState(gridState)
  const [counter, setCounter] = useRecoilState(counterState)
  const [running, setRunning] = useRecoilState(runningState)

  const resetGrid = () => {
    setGrid(Grid.generateEmptyGrid())
    setCounter(0)
    setRunning(false)
  }
  useEffect(() => {
    resetGrid()
  }, [])

  const runningRef = useRef(running)
  runningRef.current = running

  const run = () => {
    setRunning(!running)
    if (!running) {
      runningRef.current = true
      runGame()
    }
  }

  const runGame = useCallback(
    () => {
      if (!runningRef.current) {
        return
      } else {
        setGrid(g => {
          return produce(g, gridCopy => {
            for (let i = 0; i < Grid.numRows; i++) {
              for (let j = 0; j < Grid.numCols; j++) {
                let neighbors = 0
                Grid.operations.forEach(([x, y]) => {
                  const newI = i + x
                  const newJ = j + y
                  if (
                    newI >= 0 &&
                    newI < Grid.numRows &&
                    newJ >= 0 &&
                    newJ < Grid.numCols
                  ) {
                    neighbors += g[newI][newJ]
                  }
                })

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

      setTimeout(runGame, 100)
    },
    [counter]
  )

  return (
    <div>
      <GameControls run={run} resetGrid={resetGrid} />
      <GameGrid />
      <p>
        current generation: {counter}
      </p>
    </div>
  )
}
