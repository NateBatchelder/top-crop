import React from "react";

function Nav(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <nav>
      <div>
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
            </span>{" "}
            Top Crop
          </a>
        </h2>
      </div>
      <div>
        <ul className="flex-row">
          <li
            className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}
          >
            <span onClick={() => setCurrentCategory("about")}>About</span>
          </li>
          <li
            className={
              currentCategory === "topcrop" ? "mx-2 navActive" : "mx-2"
            }
          >
            <span onClick={() => setCurrentCategory("topcrop")}>Top Crop</span>
          </li>
          <li
            className={currentCategory === "meet" ? "mx-2 navActive" : "mx-2"}
          >
            <span onClick={() => setCurrentCategory("meet")}>
              Meet the Developers
            </span>
          </li>
          <li
            className={
              currentCategory === "contact" ? "mx-2 navActive" : "mx-2"
            }
          >
            <span onClick={() => setCurrentCategory("contact")}>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
