import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary/error-boundary";
import Spinner from "./components/spinner/spinner";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import VideosPage from "./views/videos/videos";
import ContactIcon from "./components/contact-icon/contact-icon";

import { GlobalStyle } from "./global.styles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={Spinner}>
            <Route path="/videos" component={VideosPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <ContactIcon />
      <Footer />
    </div>
  );
}

export default App;
