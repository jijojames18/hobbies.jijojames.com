import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary/error-boundary";
import Spinner from "./components/spinner/spinner";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BlogPage from "./views/blog/blog";
import GalleryPage from "./views/gallery/gallery";
import ProjectsPage from "./views/projects/projects";
import AboutPage from "./views/about/about";
import ContactIcon from "./components/contact-icon/contact-icon";
import PageNotFound from "./components/page-not-found/page-not-found";

import { GlobalStyle } from "./global.styles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={Spinner}>
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <ContactIcon />
      <Footer />
    </div>
  );
}

export default App;
