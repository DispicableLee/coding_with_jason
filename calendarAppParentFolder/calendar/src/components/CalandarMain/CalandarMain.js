import react from "react";
import SingleDay from "../SingleDay/SingleDay";
import "./CalandarMain.css";
export default function CalandarMain(monthsAndDays) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const monthName = months[monthIndex];
    const daysInMonth = monthsAndDays.monthsAndDays[monthName]
    const daysArray = (daysInMonth) =>{
        let returned = []
        for(let i = 0; i<daysInMonth; i++){
            returned.push(i)
        }
        return returned
    }
    const renderedDays = daysArray(daysInMonth).map((day)=>{
        return (
            <SingleDay
                day={day}
            />
        )
    })

    

    return (
        <div id="calandar-main-div">
            <div className="calandar-main-header">
                {monthName}
            </div>

            <div className="day-container">
                {renderedDays}
            </div>

        </div>
    );
}
