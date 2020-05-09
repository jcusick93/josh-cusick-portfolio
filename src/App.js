import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import CompassDesignSystemPage from "./components/Pages/CompassDesignSystemPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { NavBar } from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import Pane from "./components/Pane/Pane";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />

    <NavBar />
    <Section>
      <Pane>
        <Switch>
          {" "}
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/compass-design-system"
            component={CompassDesignSystemPage}
          />
        </Switch>
      </Pane>
    </Section>

    <Footer />
  </BrowserRouter>
);

export default App;
