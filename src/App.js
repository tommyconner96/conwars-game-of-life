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
            Births: Each dead cell adjacent to exactly three live neighbors will
            become live in the next generation.
          </li>
          <li>
            Death by isolation: Each live cell with one or fewer live neighbors
            will die in the next generation.
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
      <div className="info-container">
        <h1>About This Algorithm</h1>
        {/* <h2></h2> */}
        <p>
          Conway's Game Of Life is a cellular automaton created by{" "}
          <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">
            John Horton Conway
          </a>{" "}
          in 1970. It is a zero-player game - meaning that the initial grid
          drawn is the only input. The rules of the game are applied to the
          initial input, and then a new grid is returned based on which cells
          live or die.
        </p>
        <p>
          The Game Of Life is Turing Complete. This means it is able to
          recognize or decide other data-manipulation rule sets/Algorithms.
        </p>
        <h1>About This Implementation</h1>
        <p>
          This version of Conway's Game Of Life is written in React with Hooks,
          and Recoil for state management. I chose to use Recoil because it
          seemed like the simplest way to share my state through the whole app,
          and I found the concept of Selectors for derived state to be really
          interesting and useful. Overall, it was a good experience and I plan
          on utilizing it more in the future.
        </p>
        <h1>Next Steps</h1>
        <p>
          I plan on refactoring the entire data structure of the grid. I believe
          that an array of arrays containing 1's or 0's is a lot less efficient
          than it could be. I think a Canvas grid may be a good option.
        </p>
      </div>
    </div>
  )
}
