import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            {/* <InfoCards></InfoCards> */}
        </div>
    );
};

export default Home;