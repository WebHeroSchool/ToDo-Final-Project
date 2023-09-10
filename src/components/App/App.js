import React, { useState } from "react";
import Todo from "../Todo/Todo";
import About from "../About/About";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from "react-router-dom";
import classnames from "classnames";
import styles from "./App.module.css";

const App = () => {
  const buttons = ["Todos", "About me"];
  const [clicked, setClicked] = useState(1);

  return (
    <Router>
      <div>
        <nav className={styles.menu}>
          <ul className={styles.nav}>
            {buttons.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (clicked === index) {
                      setClicked();
                    } else {
                      setClicked(index);
                    }
                  }}
                >
                  <NavLink to={`/buttons/${index}`}>
                    {
                      <button
                        className={classnames({
                          [styles.button]: true,
                          [styles.selected]: clicked === index
                        })}
                      >
                        {item}
                      </button>
                    }
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          <Route path="buttons" element={<App buttons={buttons} />} />
          <Route path="/" element={<About />} />
          <Route path=":button/0" element={<Todo />} />
          <Route path=":button/1" element={<About />} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
