import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import IsLoading from '../../../Shared/Loading/IsLoading';

const SpecialMenu = () => {

    const [deletingMenu, setdeletingMenu] = useState(null);

    const closeModal = () => {
        setdeletingMenu(null);
    }


    const { data: menus, isLoading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/menus', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    
    const handleDeleteDoctor = menu => {
        console.log(menu);
        fetch(`http://localhost:5000/menus/${menu._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${menu.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    return (
        <div>
            <h2 className="text-3xl">Special Menu: {menus?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Menu</th>
                            <th>Name</th>
                            <th>price</th>
                            {/* <th>Specialty</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, i) => <tr key={menu._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={menu.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{menu.name}</td>
                                <td>{menu.price}</td>
                                {/* <td>{menu.description}</td> */}
                                <td>
                                    <label onClick={() => setdeletingMenu(menu)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingMenu && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingMenu.name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingMenu}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default SpecialMenu;