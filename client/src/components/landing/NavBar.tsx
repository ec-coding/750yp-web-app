export default function NavBar() {
const settings = ["About Us", "Events", "Log In", "Sign Up"];

return(
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
            <img src="https://via.placeholder.com/200x133" alt="Logo" className="w-12 h-12" />
        </div>
        <ul className="flex space-x-4">
            {settings.map((menu) => {
                return(
                    <li className = "cursor-pointer hover:bg-gray-400 p-2 rounded">
                        <button  className="text-lg text-white">{menu}</button>
                       
                    </li>
                )

                }
            )}
        </ul>
        </div>
    

)

}