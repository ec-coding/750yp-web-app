
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
  


  return (
 
      
    );
  };
  
