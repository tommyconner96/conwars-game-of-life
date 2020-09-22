import React from "react"
import { useEffect, useCallback, useRef } from "react"
import { gridState, runningState, counterState } from "../recoilState/index"
import { useRecoilState } from "recoil"
import produce from "immer"
import * as Grid from "../GridDefaults"

export default function(props) {
  const [grid, setGrid] = useRecoilState(gridState)
  const [counter, setCounter] = useRecoilState(counterState)
  const [running, setRunning] = useRecoilState(runningState)

  const randomizeGrid = () => {
    const rows = []
    for (let i = 0; i < Grid.numRows; i++) {
      rows.push(
        Array.from(Array(Grid.numCols), () => (Math.random() > 0.7 ? 1 : 0))
      )
    }

    setGrid(rows)
    setCounter(0)
  }

  return (
    <div>
      {/* {running ? <button onClick={() => stopRun()}>stop</button>: <button onClick={run}>start</button>} */}
      <button onClick={props.run}>
        {running ? "stop" : "start"}
      </button>

      <button onClick={randomizeGrid}>random</button>
      <button onClick={() => props.resetGrid()}>clear</button>
      {/* <GameContainer /> */}
    </div>
  )
}
