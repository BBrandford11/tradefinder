import "./Jobsite.css";
// import { useState, useEffect } from "react";
function JobSite(props) {
  // const [selected, setSelected] = useState("62a7c0cb1acd64825bc77889");
  // const [selectedIndex, setSelectedIndex] = useState('')

  // function handleClick(jobs) {
  //   console.log(jobs._id);
  //   if (selected === jobs._id) {
  //     setStyle("selected");
  //     console.log("yes");
  //   }
  // }

  return (
    <div>
      {props.data.map((jobs, index) => {
        return (
          <div
            className={"jobsite"}
            style={{
               background: index === props.selectedIndex ? 'rgb(121, 117, 117)' : 'rgb(207, 204, 204)',


              }}
            key={jobs._id}
            onClick={() => props.setSelectedIndex(index)}
          >
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
