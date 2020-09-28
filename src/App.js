import React from "react"
import GameContainer from "./game/GameContainer"

export default function() {
  return (
    <div className="app-container">
      <GameContainer />
        <div className="info-container">
          <h1>Conway's Game Of Life</h1>
          <h2>Rules:</h2>
          <p>
            <li>
              Births: Each dead cell adjacent to exactly three live neighbors
              will become live in the next generation.
            </li>
            <li>
              Death by isolation: Each live cell with one or fewer live
              neighbors will die in the next generation.
            </li>
            <li>
              Death by overcrowding: Each live cell with four or more live
              neighbors will die in the next generation.
            </li>
            <li>
              Survival: Each live cell with either two or three live neighbors
              will remain alive for the next generation.
            </li>
          </p>
        </div>
      </div>
  )
}
