import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactUs from '@/components/ContactUs';
import { Container, Box, CardMedia, Grid, Modal, makeStyles, Divider } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventPanel from '@/components/EventPanel';

const Events = () => {

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        
        <Header />

        <div id='events-mid' className="w-full my-20">
          <div className='text-4xl text-center font-bold my-10'>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='mb-10'>
              Our Upcoming Events
            </Typography>
            <Typography sx={{ fontSize: 18, marginX: 50 }}>
              Our events are designed to connect you with industry leaders, foster meaningful conversations, and provide insights that propel your career forward.
              Don't miss out on the opportunities that await – your next career-defining connection could be just around the corner!
            </Typography>
            <Divider variant="middle" sx={{ height: '3px', width: '200px', my: 4, mx: 'auto' }} />
          </div>

          <div className="space-y-16">
            <div className='flex items-center w-3/5 bg-cyan-400 mx-auto py-4 px-7 rounded-md'>
              <div className='flex-1'>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Events (21 Results)
                </Typography>
              </div>
              <div className='flex flex-1 justify-end'>
                <button className='bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>Filter</button>
              </div>
            </div>
            <div className='bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto'>
              <EventPanel />
              <EventPanel />
              <EventPanel />
            </div>
            <div className='bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto'>
              <EventPanel />
              <EventPanel />
              <EventPanel />
            </div>
            <Typography variant="h6" className='my-10 flex items-center justify-center '>
              <button className='bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>Load More</button>
            </Typography>
          </div>
        </div>

        <div id='au-bot' className=""></div>
        <Footer />
      </div>
    </>
  )
}

export default Events
