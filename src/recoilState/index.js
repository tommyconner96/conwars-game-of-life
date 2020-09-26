import { atom, selector } from "recoil"

// atoms

// the game grid - an array
const gridState = atom({
  key: "gridState",
  default: []
})

// next grid state - used for double buffer
const nextGridState = atom({
  key: "nextGridState",
  default: []
})
// when start is called
const resetCalled = atom({
  key: "resetCalled",
  default: false
})
// boolean: is the game running?
const runningState = atom({
  key: "runningState",
  default: false
})

// counter: increments on every new generation
const counterState = atom({
  key: "counterState",
  default: 0
})

// size as a string, so we can use our <select> in GameControls.js
// to update it
const sizeStr = atom({
  key: "sizeStr",
  // string is rows x columns
  default: "25x25"
})

// selectors
// sizeState returns sizeStr as two seperate values, rows and columns, so we can
// use them throughout the app seperately.
const sizeState = selector({
  key: "sizeState",
  get: ({ get }) => {
    const size = get(sizeStr)
    const arr = size.split("x")
    // string is rows x columns
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
  nextGridState,
  resetCalled,
  runningState,
  counterState,
  sizeStr,
  sizeState
}
