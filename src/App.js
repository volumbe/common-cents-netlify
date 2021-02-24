import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Marketplace from "./components/Marketplace";
import Penn from "./chapters/Penn";
import Cornell from "./chapters/Cornell";
import JHU from "./chapters/JHU";
import Yale from "./chapters/Yale";
import NYU from "./chapters/NYU";
import Princeton from "./chapters/Princeton";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/events" exact component={() => <Events />} />
          <Route path="/marketplace" exact component={() => <Marketplace />} />
          <Route path="/penn" exact component={() => <Penn />} />
          <Route path="/cornell" exact component={() => <Cornell />} />
          <Route path="/princeton" exact component={() => <Princeton />} />
          <Route path="/jhu" exact component={() => <JHU />} />
          <Route path="/nyu" exact component={() => <NYU />} />
          <Route path="/yale" exact component={() => <Yale />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;