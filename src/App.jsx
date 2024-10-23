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

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
   
    <section id="AboutUs"><Parallax type="Aboutus"/></section>
    <section><About/></section>
    <section id="WeTrade"><Parallax type="wetrade"/></section>   
    <section><Services/></section>  
    <section><Portfolio/></section>  
    <section id="OurBrand">Our Brand</section>
    <section id="OurClients">Our Clients</section>
    <section><Sidebar/></section>
  </div>;
};

export default App;
