import { useLoaderData } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import MainSection1 from '../components/MainSection1';
import MainSection2 from '../components/MainSection2';
import MainSection3 from '../components/MainSection3';
import MainSection4 from '../components/MainSection4';
import MainSection5 from '../components/MainSection5';
import MainSection6 from '../components/MainSection6';
import MainSection7 from '../components/MainSection7';
import Footer from '../components/Footer';
import './Main.css';

const DUMMY_TOURS = [
    {
        title: 'Trip in Dubai City',
        destination: 'Dubai',
        date: new Date(2022, 1, 17),
        durability: 7,
        rating: 4.8,
        id: 't1',
        price: 1200,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 17),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 17),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 17),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Trip in Kyiv City',
        destination: 'Kyiv',
        date: new Date(2022, 1, 17),
        durability: 5,
        rating: 4.9,
        id: 't2',
        price: 600,
        image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

function Main() {
    const tours = useLoaderData();
    return (
        <div>
            <MainHeader />
            <MainSection1 />
            <MainSection2 />
            <MainSection3 tours={DUMMY_TOURS} />
            <MainSection4 />
            <MainSection5 />
            <MainSection6 />
            <MainSection7 />
            <Footer />
        </div>
    );
}

export default Main;
