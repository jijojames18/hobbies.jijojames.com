import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary/error-boundary";
import Spinner from "./components/spinner/spinner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={Spinner} />
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
