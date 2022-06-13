import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn} from "@fortawesome/free-solid-svg-icons"

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <p className="header-words">Limited time offer: Save up to 40% off </p>
        <p id="header-words-1" className="header-words"> Save Now</p>
      </div>
      <div className="header-right">
        <p className="header-words">Log in  <FontAwesomeIcon icon={faSignIn} /></p>
        
      </div>
    </div>
  );
}

export default Header;
