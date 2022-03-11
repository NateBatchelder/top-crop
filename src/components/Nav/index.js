import React from 'react';

function Nav(props) {
    const { currentCategory, setCurrentCategory } = props;
    
    
  return (
    <nav>
      <ul>
        <li className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentCategory("about")}>About</span>
        </li>
        <li className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentCategory("about")}>About</span>
        </li>
        <li className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentCategory("about")}>About</span>
        </li>
        <li className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentCategory("about")}>About</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;