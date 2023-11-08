import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
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

            <MessengerCustomerChat
                pageId="117239814614493"
                appId="1265823487333024"
                // htmlRef="<REF_STRING>"
            />
        </div>
    );
};

export default Home;