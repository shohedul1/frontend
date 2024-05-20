import Courses from "./course/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./signup/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


const App = () => {
  const [authUser, setAuhUser] = useAuth();
  // console.log('loginuser', authUser);
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to={"/signup"} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />


    </div>
  )
}

export default App
