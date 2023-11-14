import React, { useContext } from "react";
import AllData from "../ContexApi";
import ActionPanel from "./ActionPanel";

export default function AddFlight() {
  const {
    addFlight,
    setFlightId,
    setCompanyName,
    setNumberOfPassengers,
    allFlight,
  } = useContext(AllData);

  return (
    <div className="container">
      <div className="addFlight">
        <input
          onChange={(e) => {
            setFlightId(e.target.value);
          }}
          type="number"
          placeholder="Flight ID"
        />
        <input
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          type="text"
          placeholder="Airline Company"
        />
        <input
          onChange={(e) => {
            setNumberOfPassengers(e.target.value);
          }}
          type="number"
          placeholder="Passengers"
        />
        <button onClick={addFlight}>Add</button>
      </div>
      <ActionPanel />
      {allFlight()}
    </div>
  );
}
