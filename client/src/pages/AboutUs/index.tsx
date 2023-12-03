import React from 'react'
import styles from './styles.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactUs from '@/components/ContactUs';

const AboutUs = () => {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div id="about-us" className='flex justify-center items-center h-4/5'>
        <h2 className='text-5xl text-white text-center font-bold mt-10 z-10'>About Us</h2>
      </div>

      <div id='au-top' className="flex justify-center items-center pt-32 h-172">
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
      </div>

      <div id='au-mid' className="w-full">
        <h2 className='text-4xl text-center font-bold my-20 py-20 bg-sky-200'>
          Our Team
        </h2>

        <div className="space-y-16">
          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
          <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/jLjxZ3Y.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Lois Kim</h4>
                <h4 className='text-base text-center font-bold'>Empress of Everything</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/H6Hpi4l.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Landon Merigold</h4>
                <h4 className='text-base text-center font-bold'>Minister of Culture</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/MtVek4f.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Nina Hernandez</h4>
                <h4 className='text-base text-center font-bold'>Tea-EO</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/mCLG8BX.png" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Justus Carlile</h4>
                <h4 className='text-base text-center font-bold'>Sheriff of Shindigs</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Josh Clark</h4>
                <h4 className='text-base text-center font-bold'>Sous Chef of Shindigs</h4>
              </div>
            </div>
          </div>

          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
          <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/BsPLJX3.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Kayla Baumann</h4>
                <h4 className='text-base text-center font-bold'>Connection Connoisseur</h4>
              </div>
            </div>
          <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/Qai4nql.png" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Davis Perrone</h4>
                <h4 className='text-base text-center font-bold'>Digital Dynamo</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/rCFOkqV.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>David Sublett</h4>
                <h4 className='text-base text-center font-bold'>N.E.R.D.</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                <img src="https://i.imgur.com/mwBdzuw.jpg" alt="Your Image" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Kassandra Nordhoff</h4>
                <h4 className='text-base text-center font-bold'>Social Media Sith Lord</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-xl text-center font-bold'>Edwin Choi</h4>
                <h4 className='text-base text-center font-bold'>Software Sovereign</h4>
              </div>
            </div>
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
    </div>
  )
}

export default AboutUs
