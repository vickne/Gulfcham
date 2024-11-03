import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
const Navbar = () => {
  return (
    <div className="navbar">
    
    <div className="wrapper">
        <span><Sidebar/></span>
        <span><img src="/gulfkem-logo.webp" style={{width: "220px"}} alt=""/></span>
        <div className="social">
        <a href=""><img src="/facebook.png" alt=""/></a>
        <a href=""><img src="/instagram.png" alt=""/></a>
        <a href=""><img src="/youtube.png" alt=""/></a>
        <a href=""><img src="/facebook.png" alt=""/></a>
        </div>
     </div>
    </div>
  )
}

export default Navbar