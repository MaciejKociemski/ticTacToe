// import React from "react";
// import ReactDOM from "react-dom/client";
import css from "./App.css"

import Game from "./components/TicTacToe";


function App() {
  return (
    <div className={css.container}>
      <h1 >Tic Tac Toe Game</h1>
      <Game />
    </div>
  );
}

export default App;
// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<App />);