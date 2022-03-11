import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Body from "./components/TopCrop";
import Footer from "./components/Footer";

function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  const handleCategoryChange = () => {
    switch (currentCategory) {
      case "about":
        return <About />;
      case "contact":
        return <ContactForm />;
      case "body":
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
