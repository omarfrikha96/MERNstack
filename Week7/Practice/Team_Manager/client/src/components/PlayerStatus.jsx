import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SubNav from "./SubNav";
import axios from "axios";

const PlayerStatus = () => {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState([]);
  const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] =
  useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/player/")
      .then((res) => {
        console.log(res.data);
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err));
  }, [triggerGetAllRequestDummy]);

  const handleChangeGameStatus = (idFromBelow, newStatus) => {
    let putData = {};
    if (id === "1") {
      putData.gameOneStatus = newStatus;
    } else if (id === "2") {
      putData.gameTwoStatus = newStatus;
    } else {
      putData.gameThreeStatus = newStatus;
    }
    axios
    .put(`http://localhost:8000/api/player/${idFromBelow}`, putData)
    .then((response) => {
      console.log(response);
      setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy);
    })
    .catch((err) => console.log(err.response));
};

  return (
    <div>
      <div>
        <span className="nav-text">
          <Link to="/players/list">Manage Players</Link>
        </span>
        <span className="nav-text"> | </span>
        <span className="nav-text" style={{ fontWeight: "bolder" }}>
          <Link to="/status/game/:id">Manage Player Status</Link>
        </span>
      </div>

      <h1 style={{ margin: "20px" }}>Player Status - Game {id}</h1>

      <SubNav idGame={id} />

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
    {/* CONDITION RENDER FOR GAMESTATUS === 1 */}
    {id === "1" ? (
            playerData.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className={`${
                        player.gameOneStatus === "Playing"
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameOneStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameOneStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
          {/* CONDITION RENDER FOR GAMESTATUS === 2 */}
          {id === "2" ? (
            playerData.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className={`${
                        player.gameTwoStatus === "Playing"
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameTwoStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameTwoStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
          {/* CONDITION RENDER FOR GAMESTATUS === 3 */}
          {id === "3" ? (
            playerData.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className={`${
                        player.gameThreeStatus === "Playing"
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameThreeStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameThreeStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatus;
