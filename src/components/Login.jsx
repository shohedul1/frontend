import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        await axios.post("https://backend-ltqy.onrender.com/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Successfully created!');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    document.getElementById("my_modal_3").close() // Corrected here
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            }).catch((err) => {
                console.log(err);
                toast.error('This is an error!' + err);

            });
    };



    return (
        <div>
            <dialog id="my_modal_3" className="modal dark:text-black">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email:</span>
                            <br />
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder='Enter your email'
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
                            {errors.password && <span className='text-sm text-red-500'>This passsword is required</span>}


                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link to={'/signup'} className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}
                            </p>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login