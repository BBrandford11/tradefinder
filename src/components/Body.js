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
        <div >
          <h1 className=" mainPageBody1-right-1">You can count on Jobber to keep your business organized</h1>


        </div>
        <p className=" mainPageBody1-right-2">
          Manage your business and back-and-forth with customers from one place.
          Estimate, quote, schedule, invoice, get paid—no software experience
          required.
        </p>
        <input className=" mainPageBody1-input" type="email" placeholder="    Email Address" />
        <p>Try Jobbing - It's free</p>
      </div>
    </div>
  );
}

export default Body;
