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
import EventPhoto from '@/components/EventPhoto';
import EventInfo from '@/components/EventInfo';

const SingleEvent = () => {

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Header />
        <div id='single-events-mid' className="w-full my-20">

          <Container maxWidth={false} disableGutters sx={{ marginTop: '2vh' }} className="space-y-20">
            <Grid xs={12} sm={8} container alignItems="center" spacing={2} marginX={'auto'} padding={0}>
              <EventPhoto />
              <EventInfo />
            </Grid>
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Grid>
                <Typography variant="h5" className='text-purple-950 mb-3'>
                  About the Host
                </Typography>
                <Typography sx={{ fontSize: 20, border: 'black solid 2px', padding: '10px' }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea non cumque inventore deleniti exercitationem deleniti cumque
                </Typography>
              </Grid>
            </Grid>
          </Container>

        </div>

        <hr className='w-2/3 mx-auto' />

        <div id='au-bot' className="mt-10 mb-40">

          <div className="space-y-16">
            <div className='flex items-center w-3/5 mx-auto rounded-md'>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }} >More Events in Lewisville</Typography>
            </div>
            {/* <div className='bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto'>
              <EventPanel />
              <EventPanel />
              <EventPanel />
            </div> */}
            <Typography variant="h6" className='my-10 flex items-center justify-center '>
              <button className='bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>View All Events</button>
            </Typography>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default SingleEvent
