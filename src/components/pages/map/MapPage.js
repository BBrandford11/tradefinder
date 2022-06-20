import ListOfJobs from "./ListOfJobs";
import Map from "./Map";
import "./MapPage.css";
import { useState, useEffect } from "react";

function MapPage() {
  const [jobs, setJobs] = useState([]);
  // const [selected,setSelected] = useState("")
  const [selectedIndex, setSelectedIndex] = useState('')

  useEffect(() => {
    fetch("http://localhost:3002/jobsites")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="body">
      <ListOfJobs setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} data={jobs} />
      <Map data={jobs}  setSelectedIndex={setSelectedIndex}/>
    </div>
  );
}

export default MapPage;
