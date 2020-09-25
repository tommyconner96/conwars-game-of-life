import React from "react"
import { runningState, sizeStr } from "../recoilState/index"
import { useRecoilValue, useRecoilState } from "recoil"

export default function(props) {
  const running = useRecoilValue(runningState)
 // sizeStr gets turned into sizeState - by a recoil selector - to be 
 // used in the rest of the application
  const [size, setSize] = useRecoilState(sizeStr)

  const handleChange = e => {
    e.preventDefault()
    setSize(e.target.value)
  }


  return (
    <div className="controls">
      <button onClick={props.run}>
        {running ? "stop" : "start"}
      </button>

      <button onClick={props.randomizeGrid}>random</button>
      <button onClick={props.resetGrid}>clear</button>
      <select onChange={handleChange} value={size}>
          <option value="25x25">25x25</option>
          <option value="25x50">25x50</option>
          <option value="50x50">50x50</option>
          <option value="50x75">50x75</option>
        </select>
    </div>
  )
}
