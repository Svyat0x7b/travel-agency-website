import { Link } from 'react-router-dom';
import '../pages/Tours.css';

const ToursItem = ({ tour, classname, isDisplayBtn }) => {
    const price = tour.price.toFixed(2);
    console.log(tour.date);
    const dateDay = tour.date.getDay().toString().padStart(2, '0');
    const dateMonth = tour.date.getMonth().toString().padStart(2, '0');
    const dateYear = tour.date.getFullYear();

    const dateString = `${dateDay}.${dateMonth}.${dateYear}`;
    console.log(tour);
    return (
        <div className={`main-tours__item ${classname}`}>
            <div className="item__photo">
                <img src={tour.image} alt="tour image" />
            </div>
            <h5 className="item__heading">{tour.name}</h5>
            <ul className="item__features">
                <li className="tour-destination">{tour.destination}</li>
                <li className="tour-durability">{tour.durability} days</li>
                <li className="tour-rating">
                    {tour.rating} / 5 <i className="fa-solid fa-star"></i>
                </li>
            </ul>
            <div className="item__details">
                <div className="tour-price">
                    <p>Price</p>
                    <span>{price}$</span>
                </div>
                <div className="tour-date">
                    <p>Date</p>
                    <span>{dateString}</span>
                </div>
            </div>
            <div className="item-actions">
                {isDisplayBtn && (
                    <Link to={`${tour.id}`}>
                        <button className="tour-learn-btn">Learn More</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ToursItem;
