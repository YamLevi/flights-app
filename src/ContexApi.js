import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllData = createContext();

export const DataProvider = ({ children }) => {
  const [flights, setFlights] = useState([
    { id: 123, company: "CCCC", passengers: 150 },
    { id: 234, company: "BBBB", passengers: 200 },
    { id: 345, company: "CCCC", passengers: 180 },
    { id: 456, company: "DDDD", passengers: 220 },
    { id: 567, company: "BBBB", passengers: 170 },
    { id: 678, company: "AAAA", passengers: 250 },
    { id: 789, company: "CCCC", passengers: 190 },
    { id: 890, company: "BBBB", passengers: 210 },
    { id: 901, company: "AAAA", passengers: 160 },
  ]);
  const [password, setPassword] = useState("");
  const [sortSearch, setSortSearch] = useState("");
  const [flightId, setFlightId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);
  const [sort, setSort] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [showAddFlight, setShowAddFlight] = useState(false);
  const [showDeleteFlight, setShowDeleteFlight] = useState(false);
  const [deleteFlightInput, setDeleteFlightInput] = useState("");

  const nav = useNavigate();

  const login = () => {
    if (password != 12345) {
      alert("Error");
    } else {
      nav("controlpanel");
    }
  };

  const sortPanel = () => {
    nav("/controlpanel/sort");
  };

  const afterFilter = flights.filter((val) => {
    return val.company.includes(sortSearch);
  });

  const afterSort = afterFilter.sort((a, b) => {
    return a.passengers - b.passengers;
  });

  const sorted = afterFilter.sort((a, b) => {
    if (sort == "true") {
      return b.passengers - a.passengers;
    } else if (sort == "false") {
      return a.passengers - b.passengers;
    }
  });

  const addFlightPanel = () => {
    nav("/controlpanel/addflight");
  };

  const allFlight = () => {
    return (
      <div className="allFlightsContainer">
        {sorted.map((val, index) => {
          return (
            <div key={index} className="flightCard">
              <h3>ID: {val.id}</h3>
              <h3>Company: {val.company}</h3>
              <h3>Passengers: {val.passengers}</h3>
            </div>
          );
        })}
      </div>
    );
  };

  const showAllFlights = () => {
    nav("/controlpanel");
  };

  const showRemoveFlight = () => {
    nav("/controlpanel/removeflight");
  };

  const addFlight = () => {
    const existingFlight = flights.find((flight) => flight.id == flightId);
    if (flightId.length > 5) {
      alert("Error: Flight ID must be up to 5 digits");
    } else if (existingFlight) {
      alert("Error: Flight ID already exist");
    } else if (companyName.length < 1) {
      alert("Error: Company has to be at list 1 letter");
    } else if (flightId == "") {
      alert("Error: Flight ID must be numeric");
    } else if (numberOfPassengers < 1 || numberOfPassengers > 450) {
      alert("Error: Number of passengers must be between 1-450");
    } else {
      setFlights([
        ...flights,
        { id: flightId, company: companyName, passengers: numberOfPassengers },
      ]);
      nav("/controlpanel");
    }
  };

  const deleteFlight = () => {
    const existingFlight = flights.find(
      (flight) => flight.id == deleteFlightInput
    );

    const flightIndex = flights.findIndex((e) => {
      return e.id == deleteFlightInput;
    });

    let allPassengersCounter = 0;
    flights.forEach((val) => {
      allPassengersCounter += val.passengers;
    });

    if (deleteFlightInput.length > 5) {
      alert("Error: Flight ID must be up to 5 digits");
    } else if (!existingFlight) {
      alert("Error: Flight ID not found");
      return;
    } else {
      setFlights((prev) => [
        ...prev.filter((val) => {
          return val.id != deleteFlightInput;
        }),
      ]);
      alert(
        `Flight deleted \n All flights: ${
          flights.length - 1
        } \n All passengers: ${
          allPassengersCounter - flights[flightIndex].passengers
        }  `
      );
    }
  };

  return (
    <AllData.Provider
      value={{
        password,
        setPassword,
        login,
        flights,
        showAllFlights,
        allFlight,
        addFlight,
        deleteFlight,
        nav,
        sortSearch,
        setSortSearch,
        afterFilter,
        afterSort,
        flightId,
        setFlightId,
        companyName,
        setCompanyName,
        numberOfPassengers,
        setNumberOfPassengers,
        sort,
        setSort,
        sorted,
        sortPanel,
        showSort,
        setShowSort,
        addFlightPanel,
        deleteFlightInput,
        setDeleteFlightInput,
        showDeleteFlight,
        setShowDeleteFlight,
        showRemoveFlight,
      }}
    >
      {children}
    </AllData.Provider>
  );
};

export default AllData;
