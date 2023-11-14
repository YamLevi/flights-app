import React, { useContext, useState } from "react";
import AllData from "../ContexApi";
import ActionPanel from "./ActionPanel";

export default function SortPanel() {
  const { setSortSearch, allFlight, setSort } = useContext(AllData);

  return (
    <div className="container">
      <div className="sortPanel">
        <input
          onChange={(e) => {
            setSortSearch(e.target.value);
          }}
          placeholder="search"
          type="text"
        />
        <br />
        <select
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value={false}>Most available seats</option>
          <option value={true}>Least available seats</option>
        </select>
      </div>
      <ActionPanel />
      {allFlight()}
    </div>
  );
}
