import JobSite from "./Jobsite";
import "./ListOfJobs.css";


function ListOfJobs(props) {
  return ( <div className="red">Jobs here
  <JobSite  data={props.data}/>
  </div> );
}

export default ListOfJobs;