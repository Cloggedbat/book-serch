
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
// import Wrapper from "./components/Wrapper";

// import NoMatch from "./pages/NoMatch";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />

        </div>
      </Router>
    )
  };
};

export default App;