import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Meet from "./components/Meet";
import ContactForm from "./components/Contact";
import Body from "./components/TopCrop";
import Footer from "./components/Footer";

function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  const handleCategoryChange = () => {
    switch (currentCategory) {
      case "meet":
        return <Meet />;
      case "contact":
        return <ContactForm />;
      case "topcrop":
        return <Body />;
      default:
        return <About />;
    }
  };


  return (
    <div>
      <header>
        <Header
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Header>
      </header>
      <div>
        {handleCategoryChange()}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
