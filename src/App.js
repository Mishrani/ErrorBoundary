import React, { Component } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import ErrorBoundary from './Components/ErrorBoundary'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
