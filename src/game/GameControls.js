import React, { useRef } from "react"
import { runningState, sizeStr, resetCalled } from "../recoilState/index"
import { useRecoilValue, useRecoilState } from "recoil"

export default function(props) {
  const [running, setRunning] = useRecoilState(runningState)
 // sizeStr gets turned into sizeState - by a recoil selector - to be 
 // used in the rest of the application
  const [size, setSize] = useRecoilState(sizeStr)
  const [reset, setReset] = useRecoilState(resetCalled)
  // defining our ref for running status of the game
  const runningRef = useRef(running)
  runningRef.current = running

  const handleChange = e => {
    e.preventDefault()
    setSize(e.target.value)
  }

const handleRunning = () => {
  if (runningRef.current) {
    setRunning(false)
  } else {
    setRunning(true)
  }
}

  return (
    <div className="controls">
    <div className="controls-buttons">
      <button onClick={handleRunning}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={props.runOnce}>Next</button>
      <button onClick={props.randomizeGrid}>Randomize</button>
      <button onClick={() => setReset(true)}>Clear</button>
      </div>
      <div className="controls-sizes">
      <select onChange={handleChange} value={size}>
          <option value="25x25">25x25</option>
          <option value="25x50">25x50</option>
          <option value="50x50">50x50</option>
          <option value="50x75">50x75</option>
        </select>
      </div>

    </div>

  )
}
