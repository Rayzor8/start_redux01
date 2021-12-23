import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { login, logOut } from '../features/user';

const LoginPage = () => {
   const dispatch = useDispatch();

   const handleClickLogin = () => {
      dispatch(login({ name: 'John', age: 30, email: 'rayzor.dev@gmail.com' }));
   };

   const handleClickLogout = () => {
      dispatch(logOut());
   };

   return (
      <div className="flex justify-center bg-white py-4 flex-col items-center gap-4">
         <h1>This is login page</h1>
         <div className='flex gap-2'>
            <Button text="Login" handleClick={handleClickLogin} />
            <Button text="LogOut" handleClick={handleClickLogout} />
         </div>
      </div>
   );
};

export default LoginPage;
