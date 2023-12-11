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

const AboutUs = () => {

  return (
    <>
    <div className="h-screen w-screen overflow-x-hidden">
    <Header />
      <div id="about-us" className='flex justify-center items-center h-4/5'>
        <h2 id="header-test" className='text-5xl text-white text-center font-bold mt-10 z-10'>About Us</h2>
      </div>
      <Container maxWidth={false} disableGutters sx={{ marginTop: '5vh' }}>
        <Grid container alignItems="center" spacing={2} margin={0} padding={0}>

          <Grid xs={12} sm={6} container alignItems="center" justifyContent="space-between" margin={0} padding={5}>
            <CardMedia component="img" image="https://i.imgur.com/Cpungs1.jpg" alt="750YP" className='hero-image' sx={{ borderRadius: 2 }} />
          </Grid>

          <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={8}>
            <Box marginBottom={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Our Mission
              </Typography>
            </Box>
            <Box sx={{ border: '2px solid black' }} padding={4}>
              <Typography variant="body1" sx={{ fontSize: 18 }}>
                750 YP is a new program of the Lewisville Area Chamber of Commerce that aims to gather young talent while developing the next generation of leaders.
                This group will offer a wealth of opportunities for young professionals to network, give back to the community, and grow both personally and professionally!
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
      {/* <div id='au-top' className="flex justify-center items-center pt-32 h-172">
        <div className="flex-initial h-full w-1/2 bg-gray-200 rounded-md relative">
          <img
            src="https://i.imgur.com/Cpungs1.jpg"
            className='absolute inset-0 w-full h-full object-cover rounded-md'
            alt=""
          />
        </div>
        <div className="flex-initial h-full w-1/2 p-5 flex items-center justify-center">
          <div className='mx-auto h-3/4 w-3/4 space-y-8 flex flex-col'>
            <h2 className='text-4xl text-left font-bold'>
              Our Mission
            </h2>
            <div className='border-2 border-solid border-black h-full w-full p-10'>
              <p className='text-xl'>750 YP is a new program of the Lewisville Area Chamber of Commerce that aims to gather young talent while developing the next generation of leaders.</p>
            </div>
          </div>
        </div>
      </div> */}

      <div id='au-mid' className="w-full">
        <h2 className='text-4xl text-center font-bold my-20 py-20 bg-sky-200'>
          Our Team
        </h2>

        <div className="space-y-16">
          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
            <StaffProfiles customProp="lois" />
            <StaffProfiles customProp="landon" />
            <StaffProfiles customProp="nina" />
            <StaffProfiles customProp="justus" />
            <StaffProfiles customProp="joshua" />
          </div>
          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
            <StaffProfiles customProp="kayla" />
            <StaffProfiles customProp="davis" />
            <StaffProfiles customProp="david" />
            <StaffProfiles customProp="kassandra" />
            <StaffProfiles customProp="edwin" />
          </div>
        </div>

        <hr className='m-28' />

        <div id="faqs" className='mb-24'>

          <h2 className='text-4xl text-center font-bold mb-10'>Frequently Asked Questions</h2>

          <Accordion style={{ width: '50%', margin: '0 auto', padding: '0 0 20px 0' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"

            >
              <Typography>What is 750YP and how does it benefit business professionals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '50%', margin: '0 auto', padding: '0 0 20px 0' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Are there any fees associated with using 750YP?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '50%', margin: '0 auto', padding: '0 0 20px 0' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel3a-header"
            >
              <Typography>What features does 750YP offer to enhance networking experiences?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '50%', margin: '0 auto', padding: '0 0 20px 0' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel4a-header"
            >
              <Typography>How can I create an account on 750YP’s website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
        <ContactUs />
      </div>
      <div id='au-bot' className=""></div>
      <Footer />
    </div>
    </>
  )
}

export default AboutUs
