import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ReservationModal from '../ReservationOption/ReservationModal';
import ReservationOption from '../ReservationOption/ReservationOption';

const AvailableReservation = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])


    return (
        <section className='my-16'>
        <p className='text-center font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                appointmentOptions.map(option => <ReservationOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                ></ReservationOption>)
            }
        </div>
        {
            treatment &&
            <ReservationModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
            ></ReservationModal>
        }
    </section>
    );
};

export default AvailableReservation;