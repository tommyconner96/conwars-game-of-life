import { atom, selector } from "recoil"

// atoms
const gridState = atom({
  key: "gridState",
  default: []
})

const runningState = atom({
  key: "runningState",
  default: false
})

const counterState = atom({
  key: "counterState",
  default: 0
})

// const rowState = atom({
//   key: "rowState",
//   default: 25
// })

// const colState = atom({
//   key: "colState",
//   default: 25
// })

const sizeStr = atom({
  key: "sizeStr",
  default: "25x25"
})

// selectors
const changedSizeState = selector({
  key: "changedSizeState",
  get: ({ get }) => {
    const size = get(sizeStr)
    const arr = size.split("x")
    const updatedRows = parseInt(arr[0])
    const updatedColumns = parseInt(arr[1])
    return {
      updatedRows,
      updatedColumns,
    }
  }
})

export {
  gridState,
  runningState,
  counterState,
  // rowState,
  // colState,
  sizeStr,
  changedSizeState
}
