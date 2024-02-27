import React from 'react';
import image from '../../../asset/download (1).jpg'

const ReservationOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots,price } = appointmentOption;
    return (
        <div className="card ml-80">
            <div className="w-96 shadow-xl  bg-base-400 text-center rounded-md">
                <figure><img src={image} alt="Shoes" className='h-52 w-full' /></figure>
                <div className="card-body">
                    <p className="text-2xl text-black font-bold text-center">Seat Reservation</p>
                    <div className="card-actions justify-between">
                       <div>
                       {/* <div className="badge badge-outline bg-slate-300 text-black p-4 mr-3 font-serif font-bold">{slots.length > 0 ? slots[0] : 'Try Another day'}</div> */}
                       <div className="badge badge-outline bg-slate-300 text-black p-4 mr-3 font-serif font-bold">{slots.length > 0 ? 'Booking Full Day' : 'Try Another day'}  </div> 
                     
                        {/* <div className="badge badge-outline bg-slate-300 text-black p-4 mr-3 font-serif font-bold">Now {slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</div> */}
                        <div className="badge badge-outline bg-slate-300 text-black p-4 mt-3 font-serif font-bold">Price:${price}</div>
                       </div>
                        <label
                            disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn btn-outline text-black ml-24 mt-3"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book A Table</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationOption;