import React from "react";
import { useState } from "react";
import './SingleDay.css'
export default function SingleDay({day}){
    const [isCurrentDay, setCurrentDay] = useState(new Date().getDate()===day)
    console.log(isCurrentDay)





    return (
        <div id="day-box"
            className={isCurrentDay ? "current" : ""}
        >
            <p>{day}</p>
        </div>
    )
}