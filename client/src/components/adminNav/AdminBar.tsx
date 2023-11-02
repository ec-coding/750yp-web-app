export default function AdminBar(){

    const settings = ["Home", "User", "Events", "Some other fourth thing"]

    return(
        <>
            <div className="h-full w-60 bg-gray-800 flex-1 p-2.5 ">
                <p className="text-xl mb-16 text-white text-center">Admin Panel</p>
                <ul className=" space-y-8">
                    {settings.map((menu) => {
                        return(
                            <li>
                                <p className="text-lg text-white">{menu}</p>
                                <hr style={{color:"black"}}></hr>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}