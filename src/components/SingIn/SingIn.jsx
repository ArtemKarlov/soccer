import React, { useState } from "react";
import { API_HOST } from "../global/global.js";

function SingIn(props) {
  const [token, setToken] = useState("");
  const [bgGolor, setBgColor] = useState("bg-gray-400");



  const handleClick = () => {
    fetch(`${API_HOST}competitions/2000`, {
      method: "GET",
      headers: {
        "X-Auth-Token": token,
      },
    }).then(
      (response) => {
        if (response.ok) {
          props.returnToken(token);
          props.returnLoggedStatus(true);
        }
      },
      (error) => {
        setBgColor("bg-red-300");
        setToken("");
      }
    );
  };

  return (
    <div className={`px-20 py-4 w-2/3 space-y-4 mx-auto rounded-md ${bgGolor}`}>
      <h2 className="text-black text-lg font-bold text-center">Sing In</h2>
      {/* <form> вопрос с отправкой... */}
      <div className="space-y-4 flex flex-col justify-center item-center">
        <input
          value={token}
          type="password"
          id="token"
          name="token"
          placeholder="API Token"
          required="required"
          className="text-black rounded"
          onChange={(event) => setToken(event.target.value)}
        />
        <button
          className="py-2 px-3 rounded text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-800 focus:outline-none"
          onClick={handleClick}
        >
          Sing In
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-800">
          If you do not have API Token, please register on{" "}
          <a
            href="https://www.football-data.org/client/register"
            className="underline text-blue-800"
          >
            football-data.org
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SingIn;
