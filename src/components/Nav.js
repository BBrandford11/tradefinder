import "./Nav.css";

function Nav() {
  return <div className="navbar">
    <div className="nav-content">
    <p className="nav-content-logo">Jobbing logo</p>
    <p className="nav-content-dropdowns">Why Jobbing?</p>
    <p className="nav-content-dropdowns">Features </p>
    <p className="nav-content-dropdowns">Industries</p>
    <p className="nav-content-dropdowns">Pricing</p>
    <p className="nav-content-dropdowns">Resources</p>
    <p className="nav-content-number">1-800-867-5309</p>
    <div className="nav-content-trial">
    <p>Start Free Trial</p>
    </div>
    </div>
  </div>;
}

export default Nav;
