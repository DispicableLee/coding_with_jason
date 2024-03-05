import react from 'react'
import './Banner.css'


export default function Banner(){





    const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const currentDate = new Date();

const year = currentDate.getFullYear();
const monthIndex = currentDate.getMonth();
const monthName = months[monthIndex];
const day = currentDate.getDate();
    return (
        <div id='banner-main'>
            <h2
                className='banner-header'
            >
                {day}
            </h2>
            
            <h3
                className='banner-header'
            >
                {monthName}
            </h3>
            <h3
                className='banner-header'
            >
                {year}
            </h3>
        </div>
    )
}