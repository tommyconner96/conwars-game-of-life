import React, { useEffect, useRef } from "react"
import {
  gridState,
  counterState,
  runningState,
  sizeState,
  nextGridState
} from "../recoilState/index"
import { useRecoilState, useRecoilValue } from "recoil"
import produce from "immer"

export default function() {

  const [grid, setGrid] = useRecoilState(gridState)
  const [nextGrid, setNextGrid] = useRecoilState(nextGridState)
  const running = useRecoilValue(runningState)
  const counter = useRecoilValue(counterState)
  const runningRef = useRef(running)
  runningRef.current = running
  const gridSize = useRecoilValue(sizeState)
  const numCols = gridSize.updatedColumns

  // double buffer: 
  useEffect(() => {
    console.log("double buffer, current frame:", counter)
    console.log("current grid state: ", grid)
    console.log("next grid state: ", nextGrid)
    setGrid(nextGrid)
  },[nextGrid])

  const clickGrid = (i, j) => {
    if (running === false) {
      // console.log(gridBuffer)
      console.log(grid)
      const newGrid = produce(grid, gridCopy => {
        gridCopy[i][j] = grid[i][j] ? 0 : 1
      })
      setGrid(newGrid)
    } else {
      return
    }
  }

  return (
    <>
                <div className='grid' id={`size-${numCols}`}>
                  {grid.map((rows, i) =>
                    rows.map((cols, j) =>
                      <div className='cells-each'
                        key={`${i}-${j}`}
                        // used for styling. cells-1 are live cells and cells-0 are dead
                        id={`cells-${cols}`}
                        onClick={() => clickGrid(i, j)}
                      />
                    )
                  )}
                </div>
                <br></br>
                {/* <div className='grid' id={`size-${numCols}`}>
                  {nextGrid.map((rows, i) =>
                    rows.map((cols, j) =>
                      <div className='cells-each'
                        key={`${i}-${j}`}
                        // used for styling. cells-1 are live cells and cells-0 are dead
                        id={`cells-${cols}`}
                        onClick={() => clickGrid(i, j)}
                      />
                    )
                  )}
                </div>   */}
    </>

  )
}

// Styles
// const StyledGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(${props => props.gridSize}, 20px);

// `
// const StyledNode = styled.div`
//   border: solid 1px black;
//   width: 10px;
//   height: 10px;
// `
