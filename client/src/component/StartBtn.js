import React, { useState } from "react";
import socket from "../socketConfig";

export const StartBtn = ({ player, gameID }) => {
  const [showBtn, setShowBtn] = useState(true);
  const { isPartyLeader } = player;
  const onClick = (e) => {
      socket.emit('timer', {playerID: player._id, gameID})
      setShowBtn(false)
  }
  return isPartyLeader && showBtn ? (
    <button type="button" onClick={onClick} className="btn btn-primary">
      Start Game
    </button>
  ) : null;
};
