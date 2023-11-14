import React, { useContext } from "react";
import ActionPanel from "./ActionPanel";
import AllData from "../ContexApi";

export default function ControlPanel() {
  const { flights } = useContext(AllData);

  return (
    <div className="container">
      <ActionPanel />
      <div className="allFlightsContainer">
        {flights.map((val, index) => {
          return (
            <div key={index} className="flightCard">
              <h3>ID: {val.id}</h3>
              <h3>Company: {val.company}</h3>
              <h3>Passengers: {val.passengers}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
