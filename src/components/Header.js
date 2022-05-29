import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <p className="header-words">Limited time offer: Save up to 40% off </p>
        <p id="header-words-1" className="header-words"> Save Now</p>
      </div>
      <div className="header-right">
        <p className="header-words">Log in</p>
      </div>
    </div>
  );
}

export default Header;
