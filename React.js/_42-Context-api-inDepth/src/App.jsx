import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";

import CounterContextProvider from "./contexts/CounterContext";

import CompA from "./components/CompA";
import CompB from "./components/CompB";

import NameContextProvider from "./contexts/NameContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <CounterContextProvider>
        <Counter />
        <CompA />
        <NameContextProvider>
          <CompB />
        </NameContextProvider>
      </CounterContextProvider>
    </div>
  );
}

export default App;
