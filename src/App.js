import React from "react";
import Forecast from "./Forecast";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Forecast />
      </header>{" "}
      <Footer />
    </div>
  );
}

export default App;
