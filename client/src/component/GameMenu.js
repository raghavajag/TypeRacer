import React from "react";
import { useHistory } from "react-router-dom";

export const GameMenu = () => {
  let history = useHistory();
  return (
    <div className="text-center">
      <h1>Welcome to Type Racer</h1>
      <button
        type="button"
        onClick={() => history.push("/game/create")}
        className='btn btn-primary btn-ls mr-3'
      >Create Game</button>
      <button
        type="button"
        onClick={() => history.push("/game/join")}
        className='btn btn-primary btn-ls'
      >Join Game</button>
    </div>
  );
};
