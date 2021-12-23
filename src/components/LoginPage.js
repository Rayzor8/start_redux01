import React from 'react'
import Button from './Button'

const LoginPage = () => {
    return (
        <div className='flex justify-center bg-white py-4 flex-col items-center gap-4'>
            <h1>This is login page</h1>
           <Button text='Login'/>
        </div>
    )
}

export default LoginPage
