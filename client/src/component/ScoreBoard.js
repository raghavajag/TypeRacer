import React from "react";
const getScoreBoard = (players) => {
  const ScoreBoard = players.filter((player) => player.WPM !== -1);
  return ScoreBoard.sort((a, b) =>
    a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0
  );
};
export const ScoreBoard = ({ players }) => {
  const ScoreBoard = getScoreBoard(players);
  if (ScoreBoard.length === 0) {
    return null;
  }
  return (
    <table className="table table-striped my-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">WPM</th>
        </tr>
      </thead>
      <tbody>
        {ScoreBoard.map((player, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{player.nickName}</td>
              <td>{player.WPM}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
