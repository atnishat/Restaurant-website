import React from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../../asset/reservation1.jpg'

import './banner.css'

const ReservationBanner = ({selectedDate, setSelectedDate,}) => {
    return (
       <header className='py-6'>
          <h2 className='text-xl font-bold text-center mb-10'>Please, Select a date for your reservation.</h2>
            <div className="hero">
              
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt="dentist chair" className="add max-w-sm rounded-lg " />
                    <div className='mr-10 sm:w-full '>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ReservationBanner;