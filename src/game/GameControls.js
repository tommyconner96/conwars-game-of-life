import React, { useState, useEffect } from "react"
import { runningState, rowState, colState, sizeStr } from "../recoilState/index"
import { useRecoilValue, useRecoilState } from "recoil"
import * as Grid from '../GridDefaults'

export default function(props) {
  const running = useRecoilValue(runningState)
  // const [columns, setColumns] = useRecoilState(colState)
  // const [rows, setRows] = useRecoilState(rowState)
  const [size, setSize] = useRecoilState(sizeStr)

  const handleChange = e => {
    e.preventDefault()
    setSize(e.target.value)
  }

  // useEffect(() => {
  //   let arr = `${size}`
  //   let newArr = arr.split("x")
  //   setRows(newArr[0])
  //   setColumns(newArr[1])

  // },[])


  return (
    <div>
      <button onClick={props.run}>
        {running ? "stop" : "start"}
      </button>

      <button onClick={props.randomizeGrid}>random</button>
      <button onClick={props.resetGrid}>clear</button>
      {/* <GameContainer /> */}
      <select onChange={handleChange} value={size}>
          <option value="50x50">50x50</option>
          <option value="25x25">25x25</option>
          <option value="75x75">75x75</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
    </div>
  )
}
