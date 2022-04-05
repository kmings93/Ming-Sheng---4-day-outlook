import React from "react";
import API from "./API";
import { useState, useEffect } from "react";
import DayOneScreen from "../components/dayOne";
import DayTwoScreen from "../components/dayTwo";
import DayThreeScreen from "../components/dayThree";
import DayFourScreen from "../components/dayFour";

function FourDays() {
  const [newWeather, setWeather] = useState({
    list: [],
  });

  useEffect(() => {
    getListOfWeather();
  }, []);

  async function getListOfWeather() {
    const responses = await API.get("/environment/4-day-weather-forecast");
    // { params: { date: "2022-04-02" } }
    console.log(responses.data.items[0].forecasts);
    // if (responses === 200) {
    //   console.log(responses);
    //   let retrieveAPI = (o) => {
    //     o.list = responses.data.items;
    //     console.table(o);
    //     return o;
    //   };
    //   setWeather(retrieveAPI);
    //   console.log(retrieveAPI);
    // }

    // Attempt 2 >>>>> Check why responses do not work? Need responses.status
    if (responses.status === 200) {
      console.log("responses ok", Array.isArray(responses), responses);
      //   setWeather(() => {
      //     // state.list = responses.data.items[0];
      //     // state.list = [responses.data.items[0].forecasts[0]];
      //     newWeather.list = responses.data.items[0].forecasts[0];
      //     console.log("new state", typeof state.list);
      //     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> This is an object. Shouldn't it be an array when we update into state? A: is an object
      //     console.log("new state", state);
      //     return state;
      //   });

      // Attempt 2a
      newWeather.list = responses.data.items[0].forecasts;
      console.log("new state", Array.isArray(newWeather.list), newWeather.list);
      let update = newWeather.list; //array vs object
      console.log("update", update);
      //   update = responses.data.items[0].forecasts[0];
      setWeather(update);
      console.log("setWeather", Array.isArray(newWeather), newWeather); //object
      console.log(newWeather.list[0].temperature.high); // 34
      console.log("list", Array.isArray(newWeather.list), newWeather.list);
      //   let temperature = setWeather(update);
      //   console.log(temperature);

      // Attempt 2b : Spread
      //   let update = [...newWeather.list];
      //   update.push(responses.data.items[0].forecasts);
      //   console.log("update", update);
      //   setWeather(update);
      //   console.log("new", newWeather);
      //   //   console.log("setWeather", Array.isArray(newWeather), newWeather);
      //   console.log(newWeather.list[0].temperature.high);
      //   //   console.log("list", Array.isArray(newWeather.list), newWeather.list);
    }
  }

  //   function WeatherItems() {
  //     let temperature = newWeather.list[0].temperature.high;
  //   }

  return (
    <>
      <section>
        <h2>4-Day Outlook</h2>
        <h2>{newWeather.list[0].temperature.high}</h2>
        <DayOneScreen screen={newWeather} />
        <DayTwoScreen screen={newWeather} />
        <DayThreeScreen screen={newWeather} />
        <DayFourScreen screen={newWeather} />
        {/* <ul className = "Tuesday"> */}
      </section>
    </>
  );
}

export default FourDays;

// let arr = [1, 2, 3, 4];
// console.log(typeof arr);

// let newArr = arr.map(function (v) {
//   return v * 2;
// });
// console.log(newArr);

// {newWeather.list.map((p) => {
//   return (
//     <li>
//       {p.date}
//       {/* <br />
//       Forecast: {p.wind}
//       <br />
//     Temperature: */}
/* //     </li>
    //     // <li>{p[0].forecast}</li>
//   ); */

// {/* <small container  Date={state.date
// {/* <li>Forecast: {JSON.stringfy(newWeather.list.forecasts)}</li> */}
// {/* <li>Date: {JSON.stringify(newWeather.list.date)}</li> */}
// {/* {/* <li>Temperature High: {JSON.stringify(newWeather.list.temperature.high)}</li> */}
// {/* <li>Temperature Low: {JSON.stringify(newWeather.list.temperature.low)}</li>
// <li>Humidity High: {JSON.stringify(newWeather.list.relative_humidity.high)}</li>
// <li>Humidity Low: {JSON.stringify(newWeather.list.relative_humidity.low)}</li> */}
// {/* <li>{JSON.stringify(newWeather.list)}</li> */}
// {/* <li>Date: {JSON.stringify(newWeather.list.date)}</li> */}

//   props.in({ ...newWeather }); // Should not shift the information up

//   // Check that newWeather.list.map is an Array
//   let arr = newWeather.list.map((p) => {
//     console.log("argument", p);
//     return p;
//   });
//   console.log("array", arr);
