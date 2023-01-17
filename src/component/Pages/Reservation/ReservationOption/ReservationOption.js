import React from 'react';

const ReservationOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
        <div className="card-body bg-yellow-600 text-center rounded-md">
            <h2 className="text-2xl text-black font-bold text-center">{name}</h2>
            <p className='text-black'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p className='text-black'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <div className="card-actions justify-center">
                <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn btn-outline text-white"
                    onClick={() => setTreatment(appointmentOption)}
                >Book A Table</label>
            </div>
        </div>
    </div>
    );
};

export default ReservationOption;