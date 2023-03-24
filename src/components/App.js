import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Start</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Aktualności</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Kontakt</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
