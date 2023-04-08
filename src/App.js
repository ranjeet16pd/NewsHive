import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
// import About from "./components/About";

//class based component
export default class App extends Component {
  pageSize = 5;
  // mode="light";

  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                  country="in"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  key="sports"
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  key="technology"
                  category="technology"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="enterainment"
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={this.pageSize}
                  key="health"
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  key="science"
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  key="business"
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
                <About
                  // pageSize={this.pageSize}
                  key="about"
                  // category="business"
                  // country="in"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
