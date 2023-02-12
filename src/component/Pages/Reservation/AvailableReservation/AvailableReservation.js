import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import IsLoading from '../../Shared/Loading/IsLoading';
import ReservationModal from '../ReservationOption/ReservationModal';
import ReservationOption from '../ReservationOption/ReservationOption';

const AvailableReservation = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
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

    return (
        <section className='py-16 bg-slate-800'>
            <p className='text-center font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            {/* grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
            <div className='mt-10 ml-32'>
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
                    refetch={refetch}
                ></ReservationModal>
            }
        </section>
    );
};

export default AvailableReservation;