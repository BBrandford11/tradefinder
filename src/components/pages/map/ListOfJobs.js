import JobSite from "./Jobsite";
import "./ListOfJobs.css";


function ListOfJobs(props) {
  return ( <div className="red">Jobs here
  <JobSite setSelectedIndex={props.setSelectedIndex} selectedIndex={props.selectedIndex}  data={props.data}/>
  </div> );
}

export default ListOfJobs;