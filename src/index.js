import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import GameContainer from "./game/GameContainer"
import { RecoilRoot } from "recoil"

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <GameContainer />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
)

