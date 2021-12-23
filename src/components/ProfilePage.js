import React from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';

const ProfilePage = () => {
   const user = useSelector((state) => state.user.value);
   
   return (
      <div className="bg-yellow-500 py-4 flex flex-col gap-4">
         <h1 className="text-center text-2xl font-bold">Profile page</h1>
         <ul className="px-4 md:text-lg">
            <li className="font-bold">
               User Name: <span className="font-normal">{user.name}</span>{' '}
            </li>
            <li className="font-bold">
               User Age : <span className="font-normal">{user.age}</span>{' '}
            </li>
            <li className="font-bold">
               User Email: <span className="font-normal">{user.email}</span>
            </li>
         </ul>
         <ToggleButton/>
      </div>
   );
};

export default ProfilePage;
