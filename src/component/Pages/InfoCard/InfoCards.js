import React from 'react';
import Infocard from './Infocard';
import clock from '../../asset/clock.svg'
import marker from '../../asset/marker.svg'
import phone from '../../asset/phone.svg'


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500'
        },
        {
            
            id: 2,
            name: 'Location',
            description: 'Our Locations  1600 Blue Amphitheatre Parkway, Mountain View, CA USA',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500'
        },
    ]
    return (
        <div className='grid pt-28 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-800'>
        {
            cardData.map(card => <Infocard
                key={card.id}
                card={card}
            ></Infocard>)
        }
    </div>
    );
};

export default InfoCards;