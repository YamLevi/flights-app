import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { DataProvider } from "./ContexApi";
import ControlPanel from "./components/ControlPanel";
import SortPanel from "./components/SortPanel";
import AddFlight from "./components/AddFlight";
import RemoveFlight from "./components/RemoveFlight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/controlpanel" element={<ControlPanel />} />
            <Route path="/controlpanel/sort" element={<SortPanel />} />
            <Route path="/controlpanel/addflight" element={<AddFlight />} />
            <Route
              path="/controlpanel/removeflight"
              element={<RemoveFlight />}
            />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
