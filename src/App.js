import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Marketplace from "./components/Marketplace";
import Penn from "./chapters/Penn";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;