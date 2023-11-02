import { useState } from "react";
import { trpc } from "@/utils/trpc";

export default function EventForm(){

    const [name, setName] = useState("hi");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [start_time, setStart] = useState("");
    const [banner, setBanner] = useState("");

    const mutation = trpc.event.create.useMutation(); // Initialize the mutation

    const handleCreateEvent = () => {
        const eventData = {
            name: name || '', // Use default value if name is falsy
            description: description || '', // Use default value if description is falsy
            date: date || '', // Use default value if date is falsy
            start_time: start_time || '', // Use default value if start_time is falsy
            end_time: start_time || '', // Use default value if end_time is falsy
            banner: banner || '' // Use default value if banner is falsy
        };

        // Trigger the mutation
        mutation.mutate(eventData);
        console.log(mutation.isSuccess)
    }

    return(
        <div className=" max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Event Name
                </label>
                <input onChange={(e) => {setName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Event Description
                </label>
                <textarea
                    onChange={(e) => {setDescription(e.target.value)}}
                    id='event'
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Event Date</label>
                <input onChange={(e) => {setDate(e.target.value)}} type="date" id="date" name="date" />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Event Time</label>
                <input onChange={(e) => {setStart(e.target.value)}} type="time" id="time" name="time" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="banner">Banner</label>
                <input onChange={(e) => {setBanner(e.target.value)}} type="file" id="banner" name="time" />
            </div>
            <div className="flex items-center justify-between">
                <button onClick={handleCreateEvent} disabled={mutation.isLoading} className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline" type="button">
                    Create Event
                </button>
            </div>
        </form>
        {mutation.error && <p className="text-red-500">Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p className="text-green-500">Event created successfully!</p>}
        <p className="text-center text-gray-500 text-xs">
            &copy; 2023 750YP. All rights reserved.
        </p>
    </div>
    )
}