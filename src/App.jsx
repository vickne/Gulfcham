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
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      <Sidebar/>
    </section>
   
    <section id="AboutUs"><Parallax type="Aboutus"/></section>
    <section><About/></section>
    <section id="WeTrade"><Parallax type="wetrade"/></section>   
    <section id="services"><Services/></section>  
    <Portfolio/>
    <section id="Contact"><Contact/></section>  
  </div>;
};

export default App;
