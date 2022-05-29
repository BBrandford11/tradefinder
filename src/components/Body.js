import "./Body.css";

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
          <h1>You can count on Jobbing to keep your business organized</h1>
        </div>
        <p>
          {" "}
          Manage your business and back-and-forth with customers from one place.
          Estimate, quote, schedule, invoice, get paid—no software experience
          required.
        </p>
      </div>
    </div>
  );
}

export default Body;
