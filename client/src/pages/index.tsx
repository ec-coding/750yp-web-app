
import { useUser } from '@auth0/nextjs-auth0/client';
import { trpc } from '../utils/trpc';
import layout from '../components/layout';
import { Root } from 'postcss';
import NavBar from '../components/landing/NavBar';
import Hero from '@/components/landing/Hero';




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

console.log(user);

  return (
    <div className="w-[1728px] h-[4359px] relative bg-white">
      <div className="w-[1728px] h-[169px] left-0 top-0 absolute">
        <div className="w-[1728px] h-[169px] left-0 top-0 absolute bg-zinc-100" />
        <div className="left-[937px] top-[74px] absolute text-black text-[22px] font-medium font-['Poppins']">About Us</div>
        <div className="left-[1095px] top-[74px] absolute text-black text-[22px] font-medium font-['Poppins']">Events</div>
        <img className="w-[200px] h-[133.33px] left-[40px] top-[15px] absolute" src="https://i.imgur.com/SsGkUGC.png" />
        <a href="/api/auth/login" className="left-[1226px] top-[74px] absolute text-black text-[22px] font-medium font-['Poppins']">Log In</a>
        
        <div className="w-[250px] h-[50px] left-[1374px] top-[65px] absolute">
          <div className="w-[250px] h-[50px] left-0 top-0 absolute bg-gradient-to-b from-yellow-400 to-yellow-400 rounded-[50px]" />
          <a  href="./admin/" className="left-[82px] top-[9px] absolute text-slate-800 text-[22px] font-medium font-['Poppins']">Sign Up</a>
        </div>
      </div>
      <div className="w-[1728px] h-[829px] left-0 top-[1833px] absolute">
        <div className="w-[1728px] h-[829px] left-0 top-0 absolute bg-stone-100" />
        <div className="w-[570px] h-40 left-[987px] top-[170px] absolute">
          <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <div className="w-6 h-6 left-[18px] top-[25px] absolute justify-center items-center inline-flex">
            <div className="w-6 h-6 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
          </div>
          <div className="left-[59px] top-[22px] absolute text-gray-800 text-xl font-semibold font-['Poppins'] uppercase leading-[30px]">Connect</div>
          <div className="w-[491px] h-[67px] left-[59px] top-[57px] absolute text-neutral-500 text-[13px] font-medium font-['Poppins'] leading-normal">Cultivating connections and forging relationships plays a pivotal role in expanding your professional network, and the Lewisville Area Chamber provides numerous exceptional networking chances for you to explore.</div>
        </div>
        <div className="w-[570px] h-40 left-[987px] top-[374px] absolute">
          <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <div className="w-6 h-6 left-[18px] top-[26px] absolute justify-center items-center inline-flex">
            <div className="w-6 h-6 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
          </div>
          <div className="left-[59px] top-[23px] absolute text-gray-800 text-xl font-semibold font-['Poppins'] uppercase leading-[30px]">Advocacy</div>
          <div className="w-[491px] h-[91px] left-[59px] top-[53px] absolute text-neutral-500 text-[13px] font-medium font-['Poppins'] leading-normal">The Lewisville Area Chamber champions a wide range of diverse member businesses, serving as an advocate for the business community. This advocacy fosters an environment conducive to growth and success, benefiting all involved.</div>
        </div>
        <div className="w-[570px] h-40 left-[987px] top-[578px] absolute">
          <div className="w-[570px] h-40 left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <div className="w-6 h-6 left-[18px] top-[26px] absolute justify-center items-center inline-flex">
            <div className="w-6 h-6 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
          </div>
          <div className="left-[59px] top-[23px] absolute text-gray-800 text-xl font-semibold font-['Poppins'] uppercase leading-[30px]">Impact</div>
          <div className="w-[491px] h-[67px] left-[59px] top-[63px] absolute text-neutral-500 text-[13px] font-medium font-['Poppins'] leading-normal">The Lewisville Area Chamber offers distinctive chances for both businesses and individuals to have a positive impact by educating them about significant community matters through its array of events and programs.</div>
        </div>
        <div className="w-[321px] h-[50px] left-[971px] top-[91px] absolute text-center text-sky-950 text-[45px] font-semibold font-['Poppins'] leading-normal">About 750YP</div>
        <img className="w-[800.08px] h-[600px] left-[94px] top-[115px] absolute" src="https://i.imgur.com/BqbiXoO.png" />
      </div>
      <div className="w-[1728px] h-[748px] left-0 top-[3333px] absolute">
        <div className="w-[1728px] h-[748px] left-0 top-0 absolute bg-indigo-300" />
        <div className="w-[466px] left-[115px] top-[252px] absolute text-black text-2xl font-normal font-['Poppins'] tracking-tight">At 750YP, we are here to help you grow and connect with like-minded individuals.</div>
        <div className="left-[115px] top-[102px] absolute text-sky-950 text-[40px] font-semibold font-['Poppins'] leading-[60px] tracking-tight">Want to learn more?<br />Get in touch!</div>
        <img className="w-[339.72px] h-[450px] left-[511px] top-[210px] absolute" src="https://i.imgur.com/WTSIkhv.png" />
        <div className="w-[765px] h-[592.13px] left-[829px] top-[96px] absolute">
          <div className="w-[765px] h-[556px] left-0 top-0 absolute">
            <div className="w-[765px] h-[556px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
            <div className="w-[478px] h-[378px] left-[144px] top-[44px] absolute">
              <div className="w-[220px] h-14 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-14 px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                  <div className="self-stretch py-4 justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-tight">Name*</div>
                  </div>
                </div>
              </div>
              <div className="w-[220px] h-14 left-0 top-[82px] absolute flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-14 px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                  <div className="self-stretch py-4 justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-tight">Phone #</div>
                  </div>
                </div>
              </div>
              <div className="w-[220px] h-14 left-[258px] top-0 absolute flex-col justify-start items-start gap-[3px] inline-flex">
                <div className="self-stretch h-14 px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                  <div className="self-stretch py-4 justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-tight">Email*</div>
                  </div>
                </div>
              </div>
              <div className="w-[478px] h-[214px] left-0 top-[164px] absolute">
                <div className="left-[12px] top-[14px] absolute text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-tight">Message*</div>
                <div className="w-[478px] h-[214px] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded border border-black border-opacity-25" />
              </div>
            </div>
            <div className="w-[250px] h-[50px] left-[258px] top-[455px] absolute">
              <div className="w-[250px] h-[50px] left-0 top-0 absolute bg-blue-950 rounded-[50px]" />
              <div className="w-[81px] h-7 left-[84px] top-[11px] absolute text-center text-white text-xl font-normal font-['Poppins']">Submit</div>
            </div>
          </div>
          <img className="w-[214.40px] h-[106.80px] left-[492px] top-[499.40px] absolute origin-top-left rotate-[-29.75deg]" src="https://via.placeholder.com/214x107" />
        </div>
      </div>
      <div className="w-[1728px] h-[620px] left-0 top-[169px] absolute">
        <div className="w-[1728px] h-[620px] left-0 top-0 absolute bg-gradient-to-b from-indigo-200 to-indigo-300" />
        <div className="w-[250px] h-[50px] left-[140px] top-[404px] absolute">
          <div className="w-[250px] h-[50px] left-0 top-0 absolute bg-gradient-to-b from-yellow-400 to-yellow-400 rounded-[50px]" />
          <div className="left-[82px] top-[9px] absolute text-slate-800 text-[22px] font-medium font-['Poppins']">Sign Up</div>
        </div>
        <img className="w-[773.49px] h-[580px] left-[839px] top-[20px] absolute" src="https://i.imgur.com/skU8GLZ.png" />
        <div className="left-[140px] top-[152px] absolute text-slate-800 text-[40px] font-semibold font-['Poppins']">Welcoming all Young Professionals...</div>
        <div className="w-[713px] left-[141px] top-[234px] absolute text-black text-2xl font-normal font-['Poppins'] leading-loose">750 YP represents a fresh initiative by the Lewisville Area Chamber of Commerce, focused on bringing together emerging young professionals and nurturing the future leaders of our community.</div>
      </div>
      <div className="w-[1647px] h-[410px] left-[111px] top-[2793px] absolute">
        <img className="w-[546.67px] h-[410px] left-[554px] top-0 absolute rounded-[10px] shadow" src="https://i.imgur.com/PRVTube.jpg" />
        <img className="w-[496px] h-[370px] left-[1151px] top-[20px] absolute rounded-[10px] shadow" src="https://i.imgur.com/JmIPnvd.jpg" />
        <div className="left-0 top-[10px] absolute text-blue-950 text-[35px] font-semibold font-['Poppins'] leading-normal tracking-tight">Discover our community</div>
        <div className="w-[493px] left-[4px] top-[64px] absolute text-sky-950 text-2xl font-normal font-['Poppins'] leading-loose">We are dedicated to fostering business expansion by promoting advocacy, fostering connections, providing education, and encouraging innovation.</div>
        <div className="w-[300px] h-[50px] left-0 top-[251px] absolute">
          <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-yellow-400 rounded-[50px]" />
          <div className="w-[158px] h-7 left-[71px] top-[11px] absolute text-center text-blue-950 text-xl font-normal font-['Poppins']">Join Today</div>
        </div>
      </div>
      <div className="w-[1645px] h-[860px] left-[41px] top-[881px] absolute">
        <div className="left-[628px] top-0 absolute text-sky-950 text-3xl font-semibold font-['Poppins']">Events in Lewisville, TX</div>
        <div className="w-[300px] h-[50px] left-[673px] top-[810px] absolute">
          <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-blue-950 rounded-[50px]" />
          <div className="w-[158px] h-7 left-[71px] top-[11px] absolute text-center text-white text-xl font-normal font-['Poppins']">Explore Events</div>
        </div>
        <div className="left-[271px] top-[62px] absolute text-black text-[22px] font-normal text-center font-['Poppins']">Participate in our community gatherings for the opportunity to network and develop collectively.</div>
        <div className="w-[60px] h-[60px] left-[1585px] top-[403px] absolute" />
        <div className="w-[60px] h-[60px] left-0 top-[403px] absolute" />
        <div className="w-[55px] h-[55px] left-[1391px] top-[170px] absolute" />
        <div className="w-[407px] h-[575px] left-[1102px] top-[146px] absolute">
        <div className="w-[407px] h-[575px] left-0 top-0 absolute bg-gray-200 rounded-[10px]" />
          <div className="w-[371px] h-[226px] left-[18px] top-[331px] absolute bg-white rounded-[10px]" />
          <img className="w-[371px] h-[294px] left-[18px] top-[18px] absolute bg-black bg-opacity-20 rounded-[10px]" src="https://i.imgur.com/hD4R252.png" />
          <div className="w-[55px] h-[55px] left-[325px] top-[29px] absolute" />
          <div className="w-[356px] left-[26px] top-[349px] absolute text-black text-[22px] font-semibold font-['Poppins']">Virtual Meet & Greet</div>
          <div className="w-[352px] left-[26px] top-[388px] absolute text-zinc-500 text-base font-medium font-['Poppins']">Host: Social Singles Dallas Meetups</div>
          <div className="w-[314px] h-[75px] left-[26px] top-[432px] absolute">
            <div className="left-[38px] top-[3px] absolute text-black text-base font-normal font-['Poppins']">SAT, OCT 28 @ 10:00 - 12:00 PM CDT </div>
            <div className="left-[38px] top-[49px] absolute text-black text-base font-normal font-['Poppins']">20 attending</div>
            <div className="left-[199px] top-[49px] absolute text-black text-base font-normal font-['Poppins']">Free, Virtual</div>
            <div className="w-[30px] h-[30px] left-0 top-0 absolute" />
            <div className="w-[30px] h-[30px] left-0 top-[45px] absolute" />
            <div className="w-[30px] h-[30px] left-[161px] top-[45px] absolute" />
          </div>
          <div className="w-[55px] h-[55px] left-[322px] top-[29px] absolute" />
        </div>
        <div className="w-[407px] h-[575px] left-[619px] top-[146px] absolute">
          <div className="w-[407px] h-[575px] left-0 top-0 absolute bg-gray-200 rounded-[10px]" />
          <div className="w-[371px] h-[226px] left-[18px] top-[331px] absolute bg-white rounded-[10px]" />
          <img className="w-[371px] h-[294px] left-[18px] top-[18px] absolute bg-black bg-opacity-20 rounded-[10px]" src="https://i.imgur.com/cmsvQqd.png" />
          <div className="w-[55px] h-[55px] left-[325px] top-[29px] absolute" />
          <div className="w-[356px] left-[28px] top-[349px] absolute text-black text-[22px] font-semibold font-['Poppins']">Happy Hour Meet & Greet</div>
          <div className="w-[352px] left-[28px] top-[388px] absolute text-zinc-500 text-base font-medium font-['Poppins']">Host: Social Singles Dallas Meetups</div>
          <div className="w-[319px] h-[75px] left-[28px] top-[432px] absolute">
            <div className="left-[38px] top-[3px] absolute text-black text-base font-normal font-['Poppins']">TUES, OCT 24 @ 4:00 - 6:00 PM CDT </div>
            <div className="left-[38px] top-[49px] absolute text-black text-base font-normal font-['Poppins']">11 attending</div>
            <div className="left-[199px] top-[49px] absolute text-black text-base font-normal font-['Poppins']">Free, In-person</div>
            <div className="w-[30px] h-[30px] left-0 top-0 absolute" />
            <div className="w-[30px] h-[30px] left-0 top-[45px] absolute" />
            <div className="w-[30px] h-[30px] left-[161px] top-[45px] absolute" />
          </div>
        </div>
        <div className="w-[407px] h-[575px] left-[136px] top-[146px] absolute">
          <div className="w-[407px] h-[575px] left-0 top-0 absolute bg-gray-200 rounded-[10px]" />
          <img className="w-[371px] h-[294px] left-[18px] top-[18px] absolute bg-black bg-opacity-20 rounded-[10px]" src="https://i.imgur.com/wM07UOj.png" />
          <div className="w-[55px] h-[55px] left-[325px] top-[29px] absolute" />
          <div className="w-[371px] h-[226px] left-[18px] top-[331px] absolute bg-white rounded-[10px]" />
          <div className="w-[356px] h-[186px] left-[27px] top-[349px] absolute">
            <div className="w-[352px] left-0 top-[71px] absolute text-zinc-500 text-base font-medium font-['Poppins']">Host: Southwest Dallas Networking Group</div>
            <div className="left-[38px] top-[114px] absolute text-black text-base font-normal font-['Poppins']">MON, OCT 23 @ 7:30 - 11:30 AM CDT </div>
            <div className="left-[38px] top-[160px] absolute text-black text-base font-normal font-['Poppins']">3 attending</div>
            <div className="left-[199px] top-[160px] absolute text-black text-base font-normal font-['Poppins']">Free, In-person</div>
            <div className="w-[30px] h-[30px] left-0 top-[111px] absolute" />
            <div className="w-[30px] h-[30px] left-0 top-[156px] absolute" />
            <div className="w-[356px] left-0 top-0 absolute text-black text-[22px] font-semibold font-['Poppins']">Southwest Dallas Networkers Power Networking</div>
            <div className="w-[30px] h-[30px] left-[161px] top-[156px] absolute" />
          </div>
        </div>
      </div>
      <div className="w-[1728px] h-[278px] left-0 top-[4081px] absolute">
        <div className="w-[1728px] h-[278px] left-0 top-0 absolute bg-zinc-100" />
        <div className="w-28 h-[149px] left-[543px] top-[90px] absolute"><span className="text-blue-950 text-sm font-normal font-['Poppins'] leading-tight">About Us<br /><br />Events<br /><br />Contact Us<br /><br />Careers<br /></span><span className="text-blue-950 text-sm font-normal font-['Poppins'] leading-[25px]"><br /></span></div>
        <div className="w-[212px] h-[87px] left-[1032px] top-[47px] absolute">
          <div className="left-0 top-0 absolute text-blue-950 text-base font-semibold font-['Poppins'] leading-[25px]">Get Connected </div>
          <div className="w-[35px] h-[35px] left-0 top-[51px] absolute" />
          <div className="w-[35px] h-[35px] left-[59px] top-[52px] absolute" />
          <div className="w-[35px] h-[35px] left-[177px] top-[52px] absolute" />
          <div className="w-[35px] h-[35px] left-[118px] top-[51px] absolute" />
        </div>
        <div className="left-[775px] top-[90px] absolute text-blue-950 text-sm font-normal font-['Poppins'] leading-tight">Privacy Policy<br /><br />Terms & Conditions<br /><br />Terms of Use</div>
        <div className="left-[543px] top-[47px] absolute text-blue-950 text-base font-semibold font-['Poppins'] leading-[25px]">Company</div>
        <div className="left-[775px] top-[47px] absolute text-blue-950 text-base font-semibold font-['Poppins'] leading-[25px]">Legal</div>
        <img className="w-[200px] h-[133.33px] left-[124px] top-[57px] absolute" src="https://i.imgur.com/SsGkUGC.png" />
      </div>
    </div>
  )
};
