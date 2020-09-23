import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { gridState, counterState, runningState, rowState, colState } from "../recoilState/index"
import { useRecoilState, useRecoilValue } from "recoil"
import * as Grid from "../GridDefaults"
import produce from "immer"

export default function() {
  const [counter, setCounter] = useRecoilState(counterState)
  const [grid, setGrid] = useRecoilState(gridState)
  const [running, setRunning] = useRecoilState(runningState)
  const numCols = useRecoilValue(colState)

  useEffect(
    () => {
      if (running === true) {
        setCounter(counter + 1)
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
    <StyledGrid>
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
    </StyledGrid>
  )
}

// Styles
const StyledGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(25, 20px);
`
const StyledNode = styled.div`
  border: solid 1px black;
  width: 20px;
  height: 20px;
`
