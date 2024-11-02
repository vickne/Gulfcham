import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ToggleButton from "./components/sidebar/toggleButton/ToggleButton";
import Links from "./components/sidebar/links/Links";
import Test from "./Test";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return <div>
     <Cursor/>
    <section id="home">
      <Navbar/>
      <Hero/>
    </section>
   
    <section id="about"><Parallax type="Aboutus"/></section>
  <section><About/></section>
  <section id="trade"><Parallax type="wetrade"/></section>   
  <section id="services"><Services/></section>  
    <Portfolio/>
    <section id="contact"><Contact/></section>
    <div id="copyright">
      <p>
      Copyrights &copy; 2024.All Rights Reserved by Gulfchem.
      </p>
        </div>
  </div>;
};

export default App;
