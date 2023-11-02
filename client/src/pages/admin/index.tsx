import React, { useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

import EventForm from "@/components/adminNav/EventForm";
import User from "@/components/adminNav/User";
import AdminHome from "../../components/adminNav/Home";

export default function Admin() {
    const { user, error, isLoading } = useUser();
    const [tile, setTile] = useState("Home");

    const settings = ["Home", "User", "Events", "Some other fourth thing"]
    

    return (
        <>
        <div className='flex h-screen bg-gray-100'>
       
            <div className="bg-gray-700 w-64 h-full text-white ">
                <p className="text-xl mb-16 text-white text-center">Admin Panel</p>
                <ul className=" space-y-8">
                    {settings.map((menu) => {
                        return(
                            <li onClick={() => {setTile(menu); console.log(tile)}} className = "cursor-pointer hover:bg-gray-400 p-2 rounded">
                                <button  className="text-lg text-white">{menu}</button>
                                <hr style={{color:"black"}}></hr>
                            </li>
                        )
                    })}
                </ul>
            </div>
  
            <div className="flex-1 p-6 justify-items-center">
                {tile == "Events" ? <EventForm /> : 
                tile == "Home" ? <AdminHome /> : 
                tile == "User" ? <User /> : null}
            </div>
        </div>
        </>
    )
}
