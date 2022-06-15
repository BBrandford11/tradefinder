import "./Jobsite.css";
function JobSite(props) {
  return (
    <div>
      {props.data.map((jobs) => {
        return (
          <div className="jobsite">
            <div className="photo">
              <img className="photo" src={jobs.photo} alt="Italian Trulli" />
            </div>
            <div>
              <h3>{jobs.address}</h3>
              <p>{jobs.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobSite;
