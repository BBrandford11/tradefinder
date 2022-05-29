import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAngleDown } from "@fortawesome/free-solid-svg-icons"
function Nav() {
  return <div className="navbar">
    <div className="nav-content">
    <p className="nav-content-logo">Jobbing logo</p>
    <p className="nav-content-dropdowns">Why Jobbing?</p>
    <p className="nav-content-dropdowns">Features <FontAwesomeIcon icon={faAngleDown} /> </p>
    <p className="nav-content-dropdowns">Industries <FontAwesomeIcon icon={faAngleDown} /> </p>
    <p className="nav-content-dropdowns">Pricing</p>
    <p className="nav-content-dropdowns">Resources <FontAwesomeIcon icon={faAngleDown} /></p>
    <p className="nav-content-number"><FontAwesomeIcon icon={faPhone} /> 1-800-867-5309</p>
    <div className="nav-content-trial">
    <p>Start Free Trial</p>
    </div>
    </div>
  </div>;
}

export default Nav;
