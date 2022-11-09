import React from 'react';
import useTitle from '../../hooks/useTitle';
import HomeServices from './HomeServices/HomeServices';
import Slider from './Slider/Slider';
import Success from './Success/Success';
import UpcomingServices from './UpcomingServices/UpcomingServices';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Success></Success>
            <UpcomingServices></UpcomingServices>
        </div>
    );
};

export default Home;