import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuhUser] = useAuth();


    const handleLogout = () => {
        try {
            setAuhUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users")
            toast.success('Successfully created!');

            setTimeout(() => {
                window.location.reload();
            }, 500);

        } catch (error) {
            toast.error('Error' + error);
            window.location.reload();
        }
    }
    // console.log(authUser)
    return (
        <div>
            <button
                onClick={handleLogout}

                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>
                Logout
            </button>
        </div>
    )
}

export default Logout