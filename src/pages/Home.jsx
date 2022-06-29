import React from 'react';

import Title from '../components/Title';
import HeroSlider from '../components/HeroSlider';

import heroSliderData from '../assets/fakeData/heroSlider';

const Home = () => {
    return (
        <Title title="Home">
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={4000}
            />
        </Title>
    );
};

export default Home;
