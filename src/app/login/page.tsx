'use client';

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// import {axios} from axios;

const LoginPage = () => {
  const [loading,setLoading]=React.useState(false);
  const router=useRouter();
  const [user,setUser]=React.useState({
    email:"",
    password:"",
  })

  const onLoginUp=async ()=>{
    try {
      setLoading(true);
     const res=await axios.post("/api/users/login",user)
     console.log("signup success",res.data);
     alert("login succesfull")
     router.push('/profile')
    } catch (error:any) {
      toast.error(error);
      alert(error)
      console.log("signup falied",error);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading?"processing":"Login"}</h1>
      <hr />
      
      <label htmlFor='email'>email</label>
      <input className='p-2 border-blue-600 rounded-3xl text-white bg-slate-600' id='email' type="text" value={user.email} onChange={(e)=>{
        setUser({...user,email:e.target.value})
      }} placeholder='email' />
      <label htmlFor='password'>password</label>
      <input className='p-2 border-blue-600 rounded-3xl text-white bg-slate-600' id='password' type="password" value={user.password} onChange={(e)=>{
        setUser({...user,password:e.target.value})
      }} placeholder='password' />
      <button onClick={onLoginUp} className='p-2 border border-gray-500 rounded-4xl mb-4 focus:outline-none focus:border-blue-800'>
        Login Here
      </button>
      <Link href='/signup'> Visit SignUp Page</Link>
    </div>
  )
}

export default LoginPage;