import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import Pane from "./components/Pane/Pane";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";

const App = () => (
  <BrowserRouter>
    <div>
      {/* <RouteNav /> */}
      <NavBar />
      <Section>
        <Pane>
          <Switch>
            {" "}
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Pane>
      </Section>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
