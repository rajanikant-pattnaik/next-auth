"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/navigation";

const ProfilePage = () => {
  const router=useRouter();
  const [data, setData] = useState('')
  const logout = async() => {
    try {
      await axios.get('/api/users/logout')
      alert("logout successfully")
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails=async()=>{
    const res=await axios.get('/api/users/me')
    console.log(res);
    setData(res.data.data._id);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h1>{data===''?'':<Link href={`/profile/${data}`}>{data}</Link>}</h1>
      <hr />
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getUserDetails}
      >
        Details
      </button>
    </div>
  );
};

export default ProfilePage;
