import React from 'react';
import { Grid, Typography, Container, TextField, TextareaAutosize, Button, Modal, Box } from '@mui/material';

const ContactUs = () => {
  return (
    <div className='bg-sky-200'>
      <Container id='au-top' className="py-20">
        <Grid container spacing={2}>
          {/* Left column with text and image */}
          <Grid item xs={12} sm={5}>
            <div className='flex flex-col flex-1'>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                Want to learn more?
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='text-purple-950 mt-2'>
                Get in touch!
              </Typography>
              <Typography variant="h6" className='mt-8'>
                At 750YP, we are here to help you grow and connect with like-minded individuals.
              </Typography>
            </div>
            <div className='flex flex-1 flex-col items-center'>
              <img src="https://i.imgur.com/bUVt6Ev.png" alt="" className='pt-20' style={{ maxWidth: '60%', height: 'auto' }} />
            </div>
          </Grid>

          {/* Right column with contact form */}
          <Grid item xs={12} sm={7}>
            <Box className='mx-auto space-y-8'>
              <div className='bg-white h-full w-full rounded-xl'>
                <form action="" className='flex flex-col mx-auto w-full py-16 space-y-4 p-6'>
                  <TextField fullWidth label="Name*" variant="outlined" />
                  <TextField fullWidth label="E-mail*" variant="outlined" />
                  <TextField fullWidth label="Phone #" variant="outlined" />
                  <TextareaAutosize
                        style={{
                        width: '100%', // Set the width to 100% or your desired width
                        minHeight: '100px', // Set the minimum height
                        resize: 'none', // Prevent resizing
                        }}
                        placeholder="Your text goes here..."
                    />
                  <Button variant="contained" className='bg-blue-900 text-white font-bold py-2 px-4 rounded-full'>
                    Submit
                  </Button>
                </form>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
