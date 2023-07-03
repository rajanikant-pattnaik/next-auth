'use client';

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';
// import {axios} from axios;

const LoginPage = () => {
  const [user,setUser]=React.useState({
    email:"",
    password:"",
  })

  const onLoginUp=async ()=>{

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>signUp</h1>
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