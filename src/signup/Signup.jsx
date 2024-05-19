
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="flex w-full join-item justify-center">
                <div className="modal-box">
                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mt-4 space-y-2'>
                            <span>Name:</span>
                            <br />
                            <input type="text"
                                {...register("name", { required: true })}
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This name is required</span>}
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
                                placeholder='Enter your passwor '
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


