import React, { useState } from "react";
import "./SingleDay.css";

export default function SingleDay({ day }) {
  const [isCurrentDay, setCurrentDay] = useState(new Date().getDate() === day);

  return (
    <div
      id="day-box"
      className={isCurrentDay ? "current" : ""}
    >
      <p>{day}</p>
      {isCurrentDay ? <p>today</p> : <></>}
    </div>
  );
}