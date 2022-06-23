import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Certificates from "./Certificates";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__body">
        <Intro />
        <Certificates />
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
