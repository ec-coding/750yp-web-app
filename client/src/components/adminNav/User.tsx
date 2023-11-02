import React from "react";
import {useEffect, useState} from 'react'
import { trpc } from "../../utils/trpc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






export default function User() {

    const [users, setUsers] = useState([]);

    
    const fetchEvent = async () => {
        console.log("fetching");
      
        try {
         const data = await fetch('http://localhost:5000/trpc/user.getAll')
         const response = await data.json()
         setUsers(response.result.data);
        } catch (error) {
            console.log('Query not returned. :(')
        }
    }

    useEffect(() => {
        fetchEvent()
    }, [])  
  

    return (
        <div className="flex  items-center justify-center">
          <table className="w-full border border-gray-300 shadow-md rounded-lg bg-white ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-600">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className=" hover:bg-sky-300 hover:cursor-pointer" >
                    <td className="px-4 py-2 text-center ">{user.id}</td>
                    <td className="px-4 py-2 text-center">{user.name}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-4 py-2 text-center">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
}