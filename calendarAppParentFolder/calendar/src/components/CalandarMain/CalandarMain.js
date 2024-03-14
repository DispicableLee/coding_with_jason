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
    const week = [
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat",
        "Sun"
    ]
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const monthName = months[monthIndex];
    const daysInMonth = monthsAndDays.monthsAndDays[monthName]
      const firstDay = new Date(currentDate.getFullYear(), monthIndex, 1).getDay();
    // Determine the number of placeholders needed for the preceding days
    const placeholders = Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }, (_, index) => index + 1);

    // Generate an array of days in the month
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);


    const startingDayIndex = new Date(`${monthName} 1, ${currentDate.getFullYear()}`).getDay();
    
    const renderedDays = daysArray.map((day, index) => {
        if (index < startingDayIndex) {
            return <div key={index} className="empty-day"></div>; // or any placeholder for empty days
        }
        
        return (
            <SingleDay
                key={index}
                day={day - startingDayIndex + 1}
            />
        );
    });


    const renderedWeekDays = week.map((day) => (
        <div key={day} className="weekday">
            {day.substring(0, 3)} {/* Displaying only the first three letters of each day */}
        </div>
    ));
    

    return (
        <div id="calandar-main-div">
            <div className="calandar-main-header">
                {renderedWeekDays}
            </div>
            <div className="calandar-main-header">
                {monthName}
            </div>

            <div className="day-container">
                {renderedDays}
            </div>

        </div>
    );
}
