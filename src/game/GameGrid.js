import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { gridState, counterState, runningState } from "../recoilState/index"
import { useRecoilState } from "recoil"
import * as Grid from "../GridDefaults"
import produce from "immer"

export default function() {
  const [counter, setCounter] = useRecoilState(counterState)
  const [grid, setGrid] = useRecoilState(gridState)
  const [running, setRunning] = useRecoilState(runningState)

  useEffect(
    () => {
      if (running === true) {
        setCounter(counter + 1)
        console.log("current cycle: ", counter)
      } else {
        console.log("cycle stopped")
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
  grid-template-columns: repeat(${Grid.numCols}, 20px);
`
const StyledNode = styled.div`
  border: solid 1px black;
  width: 20px;
  height: 20px;
`
