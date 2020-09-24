// export let numRows = 50
// export let numCols = 50

export const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]

// export const generateEmptyGrid = () => {
//   const rows = []
//   for (let i = 0; i < numRows; i++) {
//     rows.push(Array.from(Array(numCols), () => 0))
//   }

//   return rows
// }

// export const clickGrid = (i, j) => {
//     const grid = useRecoilValue(gridState)
//     const newGrid = produce(grid, gridCopy => {
//         gridCopy[i][j] = grid[i][j] ? 0 : 1
//     })
//     setGrid(newGrid)
// }
