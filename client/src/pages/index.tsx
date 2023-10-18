
import { useUser } from '@auth0/nextjs-auth0/client';
import { trpc } from '../utils/trpc';
import layout from '../components/layout';
import { Root } from 'postcss';




export default function Home() {
  
  //User information.
  const { user, error, isLoading } = useUser();


  //Gives an example call
  // const AllUsers = () => {
  //  try {`
  //   const response = trpc.user.getAll.useQuery();
  //   const data = response.data
  //   if(data){
  //     console.log(data)
  //     return
  //   } console.log('Query not returned. :(')
  //  } catch (error) {
  //   console.error(error)
  //  }
  // }

  // //Gives example call with args
  // const oneEvent = () => {
  //   try {
  //     const response = trpc.event.byId.useQuery("1")
  //     const data = response.data
  //     if(data){
  //       console.log(data)
  //       return
  //     } console.log("Query not returned. :(")
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };
  


  return (
    <div className="w-[1728px] h-[3870px] relative bg-white">

  <div className="w-[1728px] h-[202px] left-0 top-0 absolute bg-zinc-100" />
  <div className="w-[350px] h-[60px] left-[1285px] top-[67px] absolute bg-amber-400 rounded-[50px]" />
  <div className="w-[1728px] h-[761px] left-0 top-[202px] absolute bg-zinc-300" />
  <div className="w-[400px] h-[315px] left-[160px] top-[2206px] absolute bg-zinc-300" />
  <div className="w-[400px] h-[315px] left-[664px] top-[2206px] absolute bg-zinc-300" />
  <div className="w-[400px] h-[315px] left-[1168px] top-[2206px] absolute bg-zinc-300" />
  <div className="w-[625px] h-[406px] left-[138px] top-[338px] absolute bg-zinc-300 border border-black" />
  <div className="w-[738px] h-[619px] left-[896px] top-[273px] absolute bg-zinc-600" />
  <img className="w-[200px] h-[133.33px] left-[38px] top-[36px] absolute" src="../images/750yp_Banner.png" />
  <div className="w-[400px] h-[118px] left-[160px] top-[2550px] absolute bg-zinc-300" />
  <div className="w-[400px] h-[118px] left-[664px] top-[2550px] absolute bg-zinc-300" />
  <div className="w-[400px] h-[118px] left-[1168px] top-[2550px] absolute bg-zinc-300" />
  <div className="w-[350px] h-[60px] left-[138px] top-[780px] absolute bg-amber-400 rounded-[50px]" />
  <div className="w-[350px] h-[60px] left-[689px] top-[2800px] absolute bg-amber-400 rounded-[50px]" />
  <div className="w-[60px] h-[60px] left-[1612px] top-[2422px] absolute" />
  <div className="w-[60px] h-[60px] left-[56px] top-[2422px] absolute" />
  <button className="left-[1138px] top-[89px] absolute text-black text-2xl font-bold font-['Inter']">
    <a href='/api/auth/login'>Log In</a>
  </button>
  <button className="left-[1414px] top-[83px] absolute text-black text-2xl font-bold font-['Inter']">Sign Up</button>
  <div className="w-[1728px] h-[449px] left-0 top-[3421px] absolute bg-zinc-300" />
  <div className="left-[826px] top-[3631px] absolute text-black text-2xl font-bold font-['Inter']">Footer</div>
  <div className="left-[721px] top-[2081px] absolute text-white text-3xl font-bold font-['Inter']">Upcoming Events</div>
  <div className="left-[313px] top-[266px] absolute text-black text-3xl font-bold font-['Inter']">Hero Section</div>
  <h1 className="left-[767px] top-[1088px] absolute text-gray-800 text-[31.25px] font-bold font-['Josefin Sans'] uppercase leading-[47.25px]">About Us</h1>
  <div className="w-[601px] h-[49px] left-[534px] top-[1154px] absolute text-center text-neutral-500 text-base font-normal font-['Josefin Sans'] leading-normal">Insert short description here</div>
  <div className="w-[562px] h-[556px] left-[159px] top-[1284px] absolute bg-stone-300" />
  <div className="w-[570px] h-40 left-[850px] top-[1284px] absolute">
    <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
    <div className="w-6 h-6 left-[18px] top-[30px] absolute justify-center items-center inline-flex">
      <div className="w-6 h-6 justify-center items-center inline-flex">
        <div className="w-6 h-6 relative">
        </div>
      </div>
    </div>
    <div className="left-[59px] top-[30px] absolute text-gray-800 text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">TExt</div>
    <div className="w-[491px] h-[67px] left-[59px] top-[72px] absolute text-neutral-500 text-base font-normal font-['Josefin Sans'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</div>
  </div>
  <div className="w-[570px] h-40 left-[850px] top-[1484px] absolute">
    <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
    <div className="w-6 h-6 left-[18px] top-[30px] absolute justify-center items-center inline-flex">
      <div className="w-6 h-6 justify-center items-center inline-flex">
        <div className="w-6 h-6 relative">
        </div>
      </div>
    </div>
    <div className="left-[60px] top-[30px] absolute text-gray-800 text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">TEXT</div>
    <div className="w-[491px] h-[67px] left-[59px] top-[72px] absolute text-neutral-500 text-base font-normal font-['Josefin Sans'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</div>
  </div>
  <div className="w-[570px] h-40 left-[850px] top-[1684px] absolute">
    <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
    <div className="w-6 h-6 left-[18px] top-[30px] absolute justify-center items-center inline-flex">
      <div className="w-6 h-6 justify-center items-center inline-flex">
        <div className="w-6 h-6 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[60px] top-[30px] absolute text-gray-800 text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">TEXT</div>
    <div className="w-[491px] h-[67px] left-[59px] top-[72px] absolute text-neutral-500 text-base font-normal font-['Josefin Sans'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</div>
  </div>
  <div className="left-[755px] top-[3129px] absolute text-black text-2xl font-normal font-['Roboto'] leading-normal tracking-tight">Contact Us Section?</div>
</div>
  )
};
