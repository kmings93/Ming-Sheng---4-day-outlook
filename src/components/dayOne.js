import React from "react";
// import FourDay from "../screen/fourDay";

let DayOneScreen = (props) => {
  //   let [newScreen, setScreen] = useState([]);

  return (
    <>
      <div>
        <h2>Day One Container</h2>
        <p>
          Date : {props.newweather} <span> Weather : {props.newweather}</span>
        </p>
        <p>
          Temperature : {props.newweather} Wind speed : {props.newweather}
        </p>
      </div>
    </>
  );
};

export default DayOneScreen;
