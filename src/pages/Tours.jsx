import { json, useLoaderData } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ToursHeader from '../components/ToursHeader';
import ToursList from '../components/ToursList';
import Footer from '../components/Footer';
import '../pages/Main.css';
import { checkAuthLoader, getAuthToken } from '../utils/auth';

const DUMMY_TOURS = [
    {
        name: 'Trip in Dubai City',
        destination: 'Dubai',
        date: new Date(2022, 1, 4),
        durability: 7,
        rating: 4.8,
        id: 't1',
        price: 1200,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 4),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 4),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 4),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 4),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

const Tours = () => {
    const tours = useLoaderData();

    return (
        <div>
            <ToursHeader />
            <ToursList tours={tours} />
            <Footer />
        </div>
    );
};

export default Tours;

export const loader = async (params, request) => {
    checkAuthLoader();
    console.log('token exist!');
    const token = getAuthToken;
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    const response = await fetch('http://localhost:8081/api/tours/', {
        metod: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch tours.' },
            {
                status: 500,
            },
        );
    } else {
        const resData = await response.json();
        return resData.tours;
    }
};
