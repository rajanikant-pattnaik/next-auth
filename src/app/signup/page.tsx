'use client';

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';
// import {axios} from axios;

const SingUpPage = () => {
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
  })

  const onSignUp=async ()=>{

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>signUp</h1>
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
        singUp Here
      </button>
      <Link href='/login'> Visit Login Page</Link>
    </div>
  )
}

export default SingUpPage