import React, { useState } from 'react';
import AvailableReservation from '../AvailableReservation/AvailableReservation';
import ReservationBanner from '../ReservationBanner/ReservationBanner';


const Reservation = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <ReservationBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></ReservationBanner>

            <AvailableReservation
            selectedDate={selectedDate}
            ></AvailableReservation>
        </div>
    );
};

export default Reservation;