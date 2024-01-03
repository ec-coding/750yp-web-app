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

      <Container maxWidth={false} disableGutters sx={{ marginTop: '2vh' }}>
        <Grid container alignItems="center" spacing={2} margin={0} padding={0}>

          <Grid item xs={12} sm={6} container alignItems="center" justifyContent="space-between" margin={0} padding={5}>
            <CardMedia component="img" image="https://i.imgur.com/Cpungs1.jpg" alt="750YP" className='hero-image' sx={{ borderRadius: 2 }} />
          </Grid>

          <Grid item xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={8}>
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

      <div id='au-mid' className="w-full">
        <h2 className='text-4xl text-center font-bold my-16 py-16 bg-sky-200'>
          Our Team
        </h2>

        <div className="space-y-16 flex items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-2 gap-24">
            {people.map((person, index) => (
              <div key={index} className="col-span-1 row-span-1">
                <StaffProfiles person={person} />
              </div>
            ))}
          </div>
        </div>


        <hr className='m-28' />

        <div id="faqs" className='mb-24'>

          <h2 className='text-4xl text-center font-bold mb-10'>Frequently Asked Questions</h2>

       
              {faqs.map((faq) => (
                   <Accordion style={{ width: '50%', margin: '0 auto', padding: '0 0 20px 0' }}>
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                   >
                  <Typography sx={{fontWeight:"bold"}}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{color:"#787878"}}>
                      {faq.response}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                )
              )}
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
