import { useState, useEffect } from 'react';
import dateIcon from '../assets/img/date-icon.jpg';
import clockIcon from '../assets/img/clock-icon.jpg';
import temperatureIcon from '../assets/img/temperature-icon.jpg';

const MainSection2 = () => {
    const [date, setDate] = useState(new Date());

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const dateString = `${day}.${month}.${year}`;
    const timeString = `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <main className="main-2-div">
            <div className="main-2__date">
                <div className="main-2__date__photo">
                    <img src={dateIcon} alt="date icon" />
                </div>
                <p className="main-2__date__paragraph">Today Date</p>
                <h3 className="main-2__date__heading">{dateString}</h3>
            </div>
            <div className="main-2__date">
                <div className="main-2__date__photo">
                    <img src={clockIcon} alt="clock icon" />
                </div>
                <p className="main-2__date__paragraph">Current Time</p>
                <h3 className="main-2__date__heading">{timeString}</h3>
            </div>
            <div className="main-2__date">
                <div className="main-2__date__photo">
                    <img src={temperatureIcon} alt="temperature icon" />
                </div>
                <p className="main-2__date__paragraph">Temperature Weather</p>
                <h3 className="main-2__date__heading">14 &#176; C</h3>
            </div>
        </main>
    );
};

export default MainSection2;
