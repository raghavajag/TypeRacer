import React, { useEffect, useState } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./History";
import { GameMenu } from "./component/GameMenu";
import socket from "./socketConfig";
import { CreateGame } from "./component/CreateGame";
import { JoinGame } from "./component/JoinGame";
import {TypeRacer} from "./component/TypeRacer";
function App() {
  const [gameState, setGameState] = useState({
    _id: "",
    isOpen: false,
    players: [],
    words: [],
  });
  useEffect(() => {
    socket.on("updateGame", (game) => {
      // console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);
  useEffect(() => {
    if (gameState._id !== "") history.push(`/game/${gameState._id}`);
  }, [gameState._id]);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={GameMenu} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/game/join" component={JoinGame} />
        <Route
          path="/game/:gameID"
          render={(props) => <TypeRacer {...props} gameState={gameState} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
