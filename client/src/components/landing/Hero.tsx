export default function Hero(){
    return(
  
        <div className="w-full h-[620px] flex-auto bg-gradient-to-b from-indigo-200 to-indigo-300">
        <div className="flex flex-row h-full justify-center items-center">
          <div className="w-2/4 p-6">
            <h1 className="text-slate-800 text-3xl font-semibold font-['Poppins']">Welcoming all Young Professionals...</h1>
            <p className="text-2xl font-normal font-['Poppins'] leading-loose">750 YP represents a fresh initiative by the Lewisville Area Chamber of Commerce, focused on bringing together emerging young professionals and nurturing the future leaders of our community.</p>
            <button className="bg-yellow-300">Sign Up</button>
          </div>
          <div className="w-2/4 flex justify-center">
            <img src="https://via.placeholder.com/773x580" alt="Your Image" />
          </div>
        </div>
      </div>
      
     
 
    )
}