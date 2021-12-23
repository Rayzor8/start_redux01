import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    return (
        <div className='bg-yellow-500 py-4'>
            <h1 className='text-center text-2xl'>Profile page</h1>
            <ul className='px-4 text-lg'>
                <li>User Name:  </li>
                <li>User Age :  </li>
                <li>User Email: </li>
            </ul>
        </div>
    ) 
}

export default ProfilePage
