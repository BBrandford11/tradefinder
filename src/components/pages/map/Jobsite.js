import "./Jobsite.css";
function JobSite(props) {
  function handleClick(jobs) {
    console.log(jobs._id)
  }
  return (
    <div>
      {props.data.map((jobs) => {

        return (

          <div className="jobsite" key={jobs._id} onClick={(()=> handleClick(jobs))}>
            <div className="photo">
              <img className="photo" src={jobs.photo} alt="Italian Trulli" />
            </div>
            <div>
              <h3>{jobs.address}</h3>
              <p>{jobs.description}</p>
              <p>{jobs._id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobSite;
