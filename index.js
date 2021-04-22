import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = [
  {
    firstName: "Abhilash",
    lastName: "Gupta",
    nationality: "Indian",
  },
  {
    firstName: "Santhosh",
    lastName: "Kumar",
    nationality: "Indian",
  },
];

const Comp2 = (props) => {
  return (
    <React.Fragment>
      <div>{props.nationality}</div>
      <div>{props.gender}</div>
      <button onClick={() => props.wrapperMethod()}>Change Gender</button>
    </React.Fragment>
  );
};

const Comp1 = (props) => {
  const [gender, setGender] = useState("M");

  const wrapperMethod = () => {
    setGender(gender === "M" ? "F" : "M");
    console.log("second step");
  };

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  useEffect(() => {
    alert("load");
  }, []);

  
  return (
    <div className="row">
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
      <Comp2 {...props} gender={gender} wrapperMethod={wrapperMethod} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      {data.map((m) => (
        <Comp1
          firstName={m.firstName}
          lastName={m.lastName}
          nationality={m.nationality}
        />
      ))}
    </div>
  );
};

// Render your table
ReactDOM.render(<App />, document.getElementById("app"));
