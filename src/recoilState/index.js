import { atom } from "recoil"

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

const rowState = atom({
  key: "rowState",
  default: 25
})

const colState = atom({
  key: "colState",
  default: 25
})


export { gridState, runningState, counterState, rowState, colState }
