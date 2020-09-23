import React, { useState } from "react"
import { runningState, rowState, colState } from "../recoilState/index"
import { useRecoilValue, useRecoilState } from "recoil"
import * as Grid from '../GridDefaults'

export default function(props) {
  const running = useRecoilValue(runningState)
  const [columns, setColumns] = useRecoilState(colState)
  const [rows, setRows] = useRecoilState(rowState)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(rows, columns)
  }

  return (
    <div>
      <button onClick={props.run}>
        {running ? "stop" : "start"}
      </button>

      <button onClick={props.randomizeGrid}>random</button>
      <button onClick={() => props.resetGrid()}>clear</button>
      {/* <GameContainer /> */}
      <form onSubmit={handleSubmit}>
        <label>
          # of columns:
          <input
            type="text"
            value={columns}
            onChange={e => setColumns(e.target.value)}
          />
        </label>
        <label>
          # of rows:
          <input
            type="text"
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
