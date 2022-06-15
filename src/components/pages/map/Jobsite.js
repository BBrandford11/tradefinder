import "./Jobsite.css";
function JobSite(props) {
  return (
    <div>
      {props.data.map((jobs) => {
        return (
          <div className="jobsites">
            {" "}
            <img className="photo" src={jobs.photo} alt="Italian Trulli" />;
          </div>
        );
      })}
    </div>
  );
}

export default JobSite;
