import { useUser } from '@auth0/nextjs-auth0/client';
import { trpc } from '../utils/trpc';
import layout from '../components/layout';
import { Root } from 'postcss';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactUs from '@/components/ContactUs';
import StaffProfiles from '@/pages/AboutUs/StaffProfiles/StaffProfiles';
import { Container, Box, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import styles from './AboutUs.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Header />
        <Container maxWidth={false} disableGutters>
          <Grid container alignItems="center" spacing={2} margin={0} padding={0} className='bg-sky-200'>

            <Grid xs={12} sm={7} margin={0} paddingLeft={24}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: 40 }} className='text-purple-950 mb-10'>
                Welcoming all Young Professionals!
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: 24 }} paddingRight={24}>
                750 YP represents a fresh initiative by the Lewisville Area Chamber of Commerce,
                focused on bringing together emerging young professionals and nurturing the future leaders of our community.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }} className='my-10'>
                <button className='bg-yellow-400 py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>
                  <a href='/api/auth/login'>Sign Up</a></button>
              </Typography>
            </Grid>

            <Grid xs={12} sm={5} container alignItems="center" justifyContent="space-between" margin={0} paddingY={5} paddingRight={12}>
              <CardMedia component="img" image="https://i.imgur.com/VzXciUc.jpg" alt="750YP" className='hero-image' sx={{ border: '4px solid white', borderRadius: '8px' }}/>
            </Grid>

          </Grid>
        </Container>


        <div id='au-mid' className="w-full my-20">
          <div className='text-4xl text-center font-bold my-10'>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='text-purple-950 mb-3'>
              Our Upcoming Events
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              Participate in our community gatherings for the opportunity to network and develop collectively.
            </Typography>
          </div>

          <div className="space-y-16">
            <div className='bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto'>
              <Box className="bg-gray-200 rounded-lg">
                <Grid xs={12} sm={6} container>
                  <div className='flex-initial bio-panel space-y-4 p-3'>
                    <div className="w-80 h-80 rounded-lg overflow-hidden">
                      <img src="https://i.imgur.com/wM07UOj.png" alt="Your Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white mx-auto flex flex-col p-5 rounded-lg">
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Event
                      </Typography>
                      <Typography>
                        Event Subtitle
                      </Typography>
                      <Typography>
                        Date & Time
                      </Typography>
                      <Grid container className="space-x-10">
                        <Typography>
                          Attending
                        </Typography>
                        <Typography>
                          Cost
                        </Typography>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Box>
              <Box className="bg-gray-200 rounded-lg">
                <Grid xs={12} sm={6} container>
                  <div className='flex-initial bio-panel space-y-4 p-3'>
                    <div className="w-80 h-80 rounded-lg overflow-hidden">
                      <img src="https://i.imgur.com/cmsvQqd.png" alt="Your Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white mx-auto flex flex-col p-5 rounded-lg">
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Event
                      </Typography>
                      <Typography>
                        Event Subtitle
                      </Typography>
                      <Typography>
                        Date & Time
                      </Typography>
                      <Grid container className="space-x-10">
                        <Typography>
                          Attending
                        </Typography>
                        <Typography>
                          Cost
                        </Typography>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Box>
              <Box className="bg-gray-200 rounded-lg">
                <Grid xs={12} sm={6} container>
                  <div className='flex-initial bio-panel space-y-4 p-3'>
                    <div className="w-80 h-80 rounded-lg overflow-hidden">
                      <img src="https://i.imgur.com/hD4R252.png" alt="Your Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white mx-auto flex flex-col p-5 rounded-lg">

                      {/* <EventCard /> */}

                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Event
                      </Typography>
                      <Typography>
                        Event Subtitle
                      </Typography>
                      <Typography>
                        Date & Time
                      </Typography>
                      <Grid container className="space-x-10">
                        <Typography>
                          Attending
                        </Typography>
                        <Typography>
                          Cost
                        </Typography>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Box>
            </div>

            <Typography variant="h6" className='my-10 flex items-center justify-center '>
              <button className='bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>Explore Events</button>
            </Typography>
          </div>
        </div>
        <div id='au-bot' className="">
          <div className=''>

            <Container maxWidth={false} disableGutters sx={{ marginTop: '2vh' }}>
              <Grid container alignItems="center" spacing={2} margin={0} padding={0} className="bg-orange-50">

                <Grid xs={12} sm={6} container alignItems="center" justifyContent="space-between" margin={0} padding={5}>
                  <CardMedia component="img" image="https://i.imgur.com/KVEk6LU.jpg" alt="750YP" className='hero-image' sx={{ border: '4px solid white', borderRadius: '8px' }} />
                </Grid>

                <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={8}>
                  <Box marginBottom={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 40 }} className="text-purple-950">
                      About 750YP
                    </Typography>
                  </Box>
                  <div className="space-y-10">
                    <Box sx={{ backgroundColor: 'white', borderRadius: 4, padding: 4, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} padding={4}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 22, marginBottom: 2 }} className="text-purple-950">
                        CONNECT
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: 18 }}>
                        Cultivating connections and forging relationships plays a pivotal role in expanding your professional network,
                        and the Lewisville Area Chamber provides numerous exceptional networking chances for you to explore.
                      </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', borderRadius: 4, padding: 4, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} padding={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 22, marginBottom: 2 }} className="text-purple-950">
                        ADVOCACY
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: 18 }}>
                      The Lewisville Area Chamber champions a wide range of diverse member businesses, serving as an advocate for the business community. 
                      This advocacy fosters an environment conducive to growth and success, benefiting all involved.
                      </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', borderRadius: 4, padding: 4, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} padding={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 22, marginBottom: 2 }} className="text-purple-950">
                        IMPACT
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: 18 }}>
                      The Lewisville Area Chamber offers distinctive chances for both businesses and individuals to have a positive impact by educating them 
                      about significant community matters through its array of events and programs.
                      </Typography>
                    </Box>
                  </div>
                </Grid>

              </Grid>
            </Container>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Home