'use client';

import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const SingUpPage = () => {
  const router=useRouter();
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
  })
  const [loading,setLoading]=React.useState(false);
  const [buttonDisabled,setButtonDisabled]=React.useState(false);
  const onSignUp=async ()=>{
    // console.log(await axios.post('/api/users/signup',user))
      try {
        setLoading(true);
       const res=await axios.post("/api/users/singup",user)
       console.log("signup success",res.data);
       router.push('/login');
      } catch (error:any) {
        toast.error(error);
        alert(error)
        console.log("signup falied",error);
      }finally{
        setLoading(false);
      }
  }

  useEffect(() => {
    if(user.email.length>0&&user.password.length>0&&user.username.length>0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading?"processing":"signUp"}</h1>
      <hr />
      <label htmlFor='username'>username</label>
      <input className='p-2 border-blue-600 rounded-3xl text-white bg-slate-600' id='username' type="text" value={user.username} onChange={(e)=>{
        setUser({...user,username:e.target.value})
      }} placeholder='username' />
      <label htmlFor='email'>email</label>
      <input className='p-2 border-blue-600 rounded-3xl text-white bg-slate-600' id='email' type="text" value={user.email} onChange={(e)=>{
        setUser({...user,email:e.target.value})
      }} placeholder='email' />
      <label htmlFor='password'>password</label>
      <input className='p-2 border-blue-600 rounded-3xl text-white bg-slate-600' id='password' type="password" value={user.password} onChange={(e)=>{
        setUser({...user,password:e.target.value})
      }} placeholder='password' />
      <button onClick={onSignUp} className='p-2 border border-gray-500 rounded-4xl mb-4 focus:outline-none focus:border-blue-800'>
        {buttonDisabled?"No SignUp":"Yes SignUp"}
      </button>
      <Link href='/login'> Visit Login Page</Link>
    </div>
  )
}

export default SingUpPage