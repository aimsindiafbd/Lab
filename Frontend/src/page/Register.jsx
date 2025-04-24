import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContent';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, backendUrl, navigate } = useContext(AppContext)
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
                // console.log(response.data);
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                    toast.success("User Register Successfully")
                } else {
                    toast.error(response.data.message)
                }
            } else {
                const response = await axios.post(backendUrl + '/api/user/login', { email, password });
                // console.log(response.data);
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token)
                    toast.success("Welcome To Asian Labs")
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} className='mb-10 flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-2 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === "Login"
                ? ''
                : <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Name' required />
            }
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Email' required />
            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <Link to='/forgetPassword'>Forgot Password</Link>
                {
                    currentState === "Login"
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                }
            </div>
            <button type='submit' className='bg-[#00AECD] text-white font-light px-8 py-2 mt-10 w-full'>{currentState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
        </form>
    )
}

export default Register