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

const people = [
  {
    name: 'Lois Kim',
    picture: 'https://i.imgur.com/jLjxZ3Y.jpg',
    title: 'President of Everything',
    tag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsam quae ad quos doloribus assumenda itaque praesentium.',
  },
  {
    name: 'Landon Merigold',
    picture: 'https://i.imgur.com/H6Hpi4l.jpg', 
    title: 'Minister of Culture', 
    tag: 'Hey everyone! My volunteer position with the 750YP group is Co-Chair, better known as the Minister of Culture. I will help direct and oversee 750YP with Lois Kim, The Empress of _____. During the day, well 24/7, I am a Loan Officer with Fairway Independent Mortgage Corporation. I love to help people understand the power of homeownership and teach them how to make generational wealth through real estate! In my free time I enjoy coaching for Flower Mound Youth Lacrosse, golfing, working out, and watching my favorite Minnesota sports teams. The last one causes the most stress. I am excited to help this group of young professionals flourish in their careers and build deep relationships that will last a lifetime!',
  },
  {
    name: 'Nina Hernandez',
    picture: 'https://i.imgur.com/MtVek4f.jpg',
    title: 'Tea-EO',
    tag: 'Nina serves as a liaison between the Lewisville Chamber of Commerce & the 750YP committee AKA spills the tea from meeting to meeting. 💅'
  },
  {
    name: 'Justus Carlile',
    picture: 'https://i.imgur.com/mCLG8BX.png',
    title: 'Sheriff of Shindigs',
    tag: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  {
    name: 'Josh Clark',
    picture: 'https://placehold.co/400',
    title: 'Sous Chef of Shindigs',
    tag:'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  {
    name:'Kayla Baumann',
    picture: 'https://i.imgur.com/BsPLJX3.jpg',
    title: 'Connection Connoisseur',
    tag:'Kayla Baumann joined the CISNT team in 2022, and has a background in case work, event planning, and community relations. She graduated from Liberty University in 2017 with a Bachelor’s in Psychology, where she discovered her passion for creating intentional human connections and giving back to her community. Kayla is passionate about CISNT’s goal to build lasting bonds with students and their families – connecting them to the right community resource and empowering them to use those supports to succeed in school and beyond. As Director of Community and Donor Engagement, she helps further CISNT’s mission through cultivating and developing relationships with donors and community members, while overseeing fundraising and marketing. In her free time, Kayla loves to spend time with her friends and family, serve at her church, read, or explore new coffee shops.'
  },
  {
    name: 'Davis Perrone',
    picture: 'https://i.imgur.com/Qai4nql.png',
    title: 'Digital Dynamo',
    tag:'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  {
    name: 'David Sublett',
    picture: 'https://i.imgur.com/rCFOkqV.jpg',
    title: "N.E.R.D",
    tag: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  {
    name: 'Kassandra Nordhoff',
    picture: 'https://i.imgur.com/mwBdzuw.jpg',
    title: 'Social Media Sith Lord',
    tag: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  {
    name: 'Edwin Choi',
    picture: 'https://i.imgur.com/7Lvsys0.jpg',
    title: 'Software Sovereign',
    tag: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  }
]

const faqs = [
  {
    question: 'What is 750YP and how does it benefit business professionals?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    question: 'Are there any fees associated with using 750YP?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    question: 'What features does 750YP offer to enhance networking experiences?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    question: 'How can I create an account on 750YP’s website?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
]

const AboutUs = () => {

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Header />
        <Container maxWidth={false} disableGutters className='space-y-16'>
          <Grid className='bg-sky-200'>
            <Grid container alignItems="center" padding={0} sx={{ maxWidth: 1280 }} marginX={'auto'} paddingY={5}>

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="space-between" margin={0} paddingY={3}>
                <CardMedia component="img" image="https://i.imgur.com/Cpungs1.jpg" alt="750YP" className='hero-image' sx={{ border: '4px solid white', borderRadius: '8px' }} />
              </Grid>
              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={8}>
                <Box marginBottom={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }} className="text-purple-950">
                    Our Mission
                  </Typography>
                </Box>
                <Box padding={0}>
                  <Typography variant="subtitle2" sx={{ fontSize: 24 }}>
                    750 YP is a new program of the Lewisville Area Chamber of Commerce that aims to gather young talent while developing the next generation of leaders.
                    We offer a dynamic hub for young professionals dedicated to nurturing holistic development, bridging professional milestones and
                    personal aspirations through meaningful connections and shared experiences.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ maxWidth: 1280 }} marginX={'auto'}>
            <Box marginBottom={4}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} className="text-purple-950">
                Our Team
              </Typography>
            </Box>
            <Grid className="space-y-12">
              <Grid className='bio-panel-container flex items-center justify-center overflow-x-auto'>
                <StaffProfiles customProp="lois" />
                <StaffProfiles customProp="landon" />
                <StaffProfiles customProp="nina" />
                <StaffProfiles customProp="justus" />
                <StaffProfiles customProp="joshua" />
              </Grid>
              <Grid className='bio-panel-container flex items-center justify-center overflow-x-auto'>
                <StaffProfiles customProp="kayla" />
                <StaffProfiles customProp="davis" />
                <StaffProfiles customProp="david" />
                <StaffProfiles customProp="kassandra" />
                <StaffProfiles customProp="edwin" />
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid sx={{ maxWidth: 1280 }} marginX={'auto'}>
            <Box marginBottom={5}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                Frequently Asked Questions
              </Typography>
            </Box>
            <Grid marginBottom={8} className='space-y-6 px-8'>
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Can anyone join?
                </Typography>
                <Typography>
                  Right now, it’s open to anyone regardless of their membership with the Lewisville chamber.
                </Typography>
              </div>
              <hr />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Is there a cost to join?
                </Typography>
                <Typography>
                  It is FREE to join so come check us out! We also highly encourage membership with the chamber to really get the best ROI for your time.
                </Typography>
              </div>
              <hr />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Who is considered a “young professional”?
                </Typography>
                <Typography>
                  We wish we could host everyone, but the age cap for our group is 43 and under.
                </Typography>
              </div>
              <hr />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Do I have to live in Lewisville to join?
                </Typography>
                <Typography>
                  Absolutely not. You can join us regardless of your location but most of our events will be held in the Lewisville, Flower Mound, and The Colony area.
                </Typography>
              </div>
              <hr />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  How often will 750YP meet?
                </Typography>
                <Typography>
                  We will host one mixer a month, one professional development event a quarter, and volunteer events once a quarter.
                </Typography>
              </div>
              <hr />
            </Grid>
          </Grid>
        </Container>
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
