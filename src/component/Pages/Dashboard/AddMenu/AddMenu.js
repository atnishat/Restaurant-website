import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../../Shared/Loading/IsLoading';

const AddMenu = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const Menu = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        menufor: data.time,
                        image: imgData.data.url
                    }
                    console.log(Menu);
                    fetch('http://localhost:5000/menus', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(Menu)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/specialmenu')
                        })
                }
            })

        

        }




    return (
        <div className='bg-cyan-500 mt-20 w-96 p-7 ml-60'>
            <h2 className="text-4xl">Add A Special Menu</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name Of Dish</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Menu For</span></label>
                    <input type="text" {...register("time", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.time && <p className='text-red-500'>{errors.time.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-outline w-full mt-4' value="Add Menu" type="submit" />
            </form>
        </div>
    );
};

export default AddMenu;