import React, { useContext } from "react";
import AllData from "../ContexApi";

export default function Homepage() {
  const { login, setPassword } = useContext(AllData);

  return (
    <div className="">
      <div className="login">
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="passwordInput"
          placeholder="password"
          type="password"
        />
        <br />
        <button onClick={login}>login</button>
      </div>
    </div>
  );
}
