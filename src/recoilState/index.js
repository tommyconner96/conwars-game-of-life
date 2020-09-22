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

export { gridState, runningState, counterState }
