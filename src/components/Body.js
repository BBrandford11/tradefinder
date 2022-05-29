import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Body.css";
//<i class="fa-solid fa-square-chevron-down"></i>
function Body() {
  return (
    <div className="mainPageBody">
      <div className="mainPageBody1">
        <img
          className="photo1"
          src="assets/sparkyPhoto.jpg"
          alt="First slide"
        />
      </div>
      <div className="mainPageBody1-right">
        <div>
          <h1 className=" mainPageBody1-right-1">
            You can count on Jobber to keep your business organized
          </h1>
        </div>
        <p className=" mainPageBody1-right-2">
          Manage your business and back-and-forth with customers from one place.
          Estimate, quote, schedule, invoice, get paid—no software experience
          required.
        </p>
        <input
          className=" mainPageBody1-input"
          type="email"
          placeholder="    Email Address"
        />
        <button className=" mainPageBody1-free">Try Jobbing - It's free</button>
        <FontAwesomeIcon className="mainPageBody1-arrow" icon={faArrowDown} />
      </div>
    </div>
  );
}

export default Body;
