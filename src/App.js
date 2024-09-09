import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Pokemon from "./components/Pokemon";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/> 
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Pokemon/>
      <SocialLinks/>
    </div>
  );
}

export default App;
