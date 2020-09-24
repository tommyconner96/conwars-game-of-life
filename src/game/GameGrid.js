import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { gridState, counterState, runningState, rowState, colState, sizeStr, changedSizeState } from "../recoilState/index"
import { useRecoilState, useRecoilValue } from "recoil"
import * as Grid from "../GridDefaults"
import produce from "immer"

export default function() {
  
  const [counter, setCounter] = useRecoilState(counterState)
  const [grid, setGrid] = useRecoilState(gridState)
  const [running, setRunning] = useRecoilState(runningState)
  // const [numCols, setNumCols] = useRecoilState(colState)
  // const [numRows, setNumRows] = useRecoilState(rowState)
  const gridSize = useRecoilValue(changedSizeState)
  const numCols = gridSize.updatedColumns
  const numRows = gridSize.updatedRows

  // const columns = () => {
  //   let arr = `${gridSize}`
  //   let newArr = arr.split("x")
  //   console.log(newArr[0])
  //   return newArr[0]
  // }

  useEffect(() => {
      console.log("hello from gamegrid", gridSize)
      if (running === true) {
        // console.log(cols())
        setCounter(counter + 1)
        console.log("print numcols", numCols)
        console.log("current cycle: ", counter)
      } else {
        console.log("not currently running")
      }
    },
    [grid]
  )

  const clickGrid = (i, j) => {
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][j] = grid[i][j] ? 0 : 1
    })
    setGrid(newGrid)
  }

  return (
    <div id={`size-${numCols}`}>
      {grid.map((rows, i) =>
        rows.map((cols, j) =>
          <StyledNode
            key={`${i}-${j}`}
            // used for styling. cells-1 are live cells and cells-0 are dead
            id={`cells-${cols}`}
            onClick={() => clickGrid(i, j)}
          />
        )
      )}
    </div>
  )
}

// Styles
// const StyledGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(${props => props.gridSize}, 20px);
  
// `
const StyledNode = styled.div`
  border: solid 1px black;
  width: 20px;
  height: 20px;
`
