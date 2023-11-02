import EventForm from "@/components/adminNav/EventForm"
import React from "react"

export default function Dev(){
    return(
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="bg-blue-700 w-64 h-full text-white">
          <ul className="py-4">
            <li className="px-6 py-3 hover:bg-blue-600">Home</li>
            <li className="px-6 py-3 hover:bg-blue-600">Users</li>
            <li className="px-6 py-3 hover:bg-blue-600">Events</li>
          </ul>
        </div>
  
        {/* Main Content Area */}
        <div className="flex-1 p-6 justify-items-center">
          <EventForm />
        </div>
      </div>
    )
}