import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header>
      <div>
        <a href="./">
          <h2>Top Crop</h2>
        </a>
          <h4>Helping the Headless</h4>
      </div>
      <nav>
        <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </nav>
    </header>
  );
}

export default Header;
