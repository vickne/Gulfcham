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
import Clients from "./components/clients/Clients";
import CopyRight from "./components/copyright/CopyRight";

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
    <Clients/>
    <Contact/>
  <CopyRight/>
   </div>
};

export default App;
