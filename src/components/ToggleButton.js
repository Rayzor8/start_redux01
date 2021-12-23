import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme';

const ToggleButton = () => {
   const [color, setColor] = useState('');
   const themeDispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      themeDispatch(changeTheme(color));
   };
   return (
      <section className="flex gap-2 flex-col text-center">
         <h1 className="font-extrabold italic" style={{ color: color }}>
            {color.toUpperCase()}
         </h1>
         <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-2 md:gap-1 flex-col md:flex-row"
         >
            <input
               type="text"
               className="py-2 px-4 rounded"
               placeholder="Input color..."
               onChange={(e) => setColor(e.target.value)}
            />
            <button
               className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
               type="submit"
            >
               Toggle Dark mode
            </button>
         </form>
      </section>
   );
};

export default ToggleButton;
