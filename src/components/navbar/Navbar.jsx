import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
    {/*sidebar*/}
    <div className="wrapper">
        <span><img src="/gulfchem-logo.png" style={{width: "100px"}} alt=""/></span>
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