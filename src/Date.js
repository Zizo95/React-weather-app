import React from "react";

export default function Date(prosp){
    
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[prosp.date.getDay()];
  let hours = prosp.date.getHours();
  let minutes = prosp.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
 }
    return(
        <div>
            {day} {hours} : {minutes}
        </div>
    );
}