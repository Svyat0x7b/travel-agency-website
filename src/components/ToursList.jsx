import React from 'react';
import ToursItem from './ToursItem';
import '../pages/Tours.css';

const ToursList = ({ tours }) => {
    console.log('tourlist');
    console.log(tours);
    return (
        <main className="main-tours">
            {tours ? (
                tours.map((tour) => <ToursItem tour={tour} isDisplayBtn={true} key={tour.id} />)
            ) : (
                <p style={{ textAlign: 'center' }}>There is nothing in tours!</p>
            )}
        </main>
    );
};

export default ToursList;
