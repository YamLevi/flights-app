import React, { useContext, useState } from "react";
import AllData from "../ContexApi";

export default function ActionPanel() {
  const { showAllFlights, showRemoveFlight, sortPanel, addFlightPanel } =
    useContext(AllData);

  return (
    <div>
      <div className="myButtons">
        <button onClick={showAllFlights}>All flights</button>
        <button onClick={sortPanel}>Sort flights</button>
        <button onClick={addFlightPanel}>Add flight</button>
        <button onClick={showRemoveFlight}>Remove flight</button>
      </div>
    </div>
  );
}
