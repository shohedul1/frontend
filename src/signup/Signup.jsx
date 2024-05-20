
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import Login from '../components/Login';

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        try {
            const res = await axios.post("https://backend-ltqy.onrender.com/user/signup", userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Successfully');
                // localStorage.setItem("Users", JSON.stringify(res.data.user)); // Corrected here
                navigate('/'); // Redirect to home page
            }
        } catch (err) {
            console.log(err);
            toast.error('This is an error! ' + err);
        }
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="flex w-full join-item justify-center">
                <div className="modal-box dark:text-black">
                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mt-4 space-y-2'>
                            <span>Name:</span>
                            <br />
                            <input type="text"
                                {...register("fullname", { required: true })}
                                placeholder='Enter your full name'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500'>This name is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email:</span>
                            <br />
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This email is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password:</span>
                            <br />
                            <input type="password"
                                {...register("password", { required: true })}
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This password is required</span>}
                        </div>

                        <div className='flex justify-around mt-4'>
                            <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Signup
                            </button>
                            <div className='mt-4'>
                                <div>Have an account?{" "}
                                    <button type='button' onClick={() => document.getElementById("my_modal_3").showModal()} className='underline text-blue-500 cursor-pointer'>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Login />
        </div>
    );
};

export default Signup;

