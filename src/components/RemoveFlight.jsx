import React, { useContext } from "react";
import AllData from "../ContexApi";
import ActionPanel from "./ActionPanel";

export default function RemoveFlight() {
  const { deleteFlight, allFlight, deleteFlightInput, setDeleteFlightInput } =
    useContext(AllData);

  return (
    <div className="container">
      <div className="addFlight">
        <input
          onChange={(e) => {
            setDeleteFlightInput(e.target.value);
          }}
          type="number"
          placeholder="Flight ID"
        />
        <button onClick={deleteFlight}>Delete</button>
      </div>
      <ActionPanel />
      {allFlight()}
    </div>
  );
}
