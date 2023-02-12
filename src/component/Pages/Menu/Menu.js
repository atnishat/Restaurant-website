import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import AllMenu from './AllMenu';

const Menu = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menus');
            const data = await res.json();
            console.log(data)
            return data;
        }

    });



    return (
        <div className='grid pt-28 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-800'>
            { 
            users.map(user => <AllMenu
                key={user.id}
                user={user}
            ></AllMenu>)
            }
        </div>
    );
};

export default Menu;