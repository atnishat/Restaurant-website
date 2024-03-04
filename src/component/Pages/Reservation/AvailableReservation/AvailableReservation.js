import { useQuery } from '@tanstack/react-query';
import { format, isBefore, isToday } from 'date-fns';
import React, { useState } from 'react';
import IsLoading from '../../Shared/Loading/IsLoading';
import ReservationModal from '../ReservationOption/ReservationModal';
import ReservationOption from '../ReservationOption/ReservationOption';

const AvailableReservation = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/services?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <IsLoading></IsLoading>
    }
console.log(appointmentOptions);
    return (
        <section className='py-16 bg-white'>
            <p className='text-center font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            {/* grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
            <div className='mt-10 ml-40'>
                {/* {
                    appointmentOptions.map(option => <ReservationOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></ReservationOption>)
                } */}
                {
                    appointmentOptions.map(option => (
                        // Render only if the appointment date is equal to or after today
                       !isBefore(new Date(selectedDate), new Date()) || isToday(selectedDate) ? (
                            <ReservationOption
                                key={option._id}
                                appointmentOption={option}
                                setTreatment={setTreatment}
                            />
                        ) : null
                    ))
                }
            </div>
            {
                treatment &&
                <ReservationModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></ReservationModal>
            }

            {/* Date picker component */}
            {/* <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()} // Set minimum selectable date to today
            /> */}
        </section>
    );
};

export default AvailableReservation;