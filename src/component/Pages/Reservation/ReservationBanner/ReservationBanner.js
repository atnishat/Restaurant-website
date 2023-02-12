import React from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../../asset/home.png'

const ReservationBanner = ({selectedDate, setSelectedDate}) => {
    return (
       <header className='py-6 bg-slate-800'>
          <h2 className='text-xl font-bold text-center mb-10'>Please, Select a date for your reservation.</h2>
            <div className="hero">
              
                <div className="hero-content flex-col lg:flex-row-reverse bg-slate-800">
                    <img src={banner} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-10 sm:w-full'>
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