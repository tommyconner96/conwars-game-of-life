import React, { useEffect } from "react"
import styled from "styled-components"
import { gridState, counterState, runningState, sizeState } from "../recoilState/index"
import { useRecoilState, useRecoilValue } from "recoil"
import produce from "immer"

export default function() {
  
  const [counter, setCounter] = useRecoilState(counterState)
  const [grid, setGrid] = useRecoilState(gridState)
  const running = useRecoilValue(runningState)
  const gridSize = useRecoilValue(sizeState)
  const numCols = gridSize.updatedColumns

  useEffect(() => {
      if (running === true) {
        // console.log(cols())
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
  width: 10px;
  height: 10px;
`
