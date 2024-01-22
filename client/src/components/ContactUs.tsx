import React from 'react'
import { Container, Box, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';

const ContactUs = () => {
    return (
        <Container maxWidth={false} disableGutters className='bg-sky-200'>
            <Grid sx={{ maxWidth: 1280 }} paddingY={10} className="mx-auto">
                <Grid className="mx-auto mb-2">
                    <div className='mx-auto flex flex-col flex-1'>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                            Want to learn more? Get in touch!
                        </Typography>
                        <Typography variant="h6" className='mt-8'>
                            At 750YP, we are here to help you grow and connect with like-minded individuals.
                        </Typography>
                    </div>
                </Grid>
                <Grid className="mx-auto">
                    <div className='mx-auto space-y-8 flex flex-col'>
                        <div className=' h-full w-full mx-auto rounded-xl'>
                            <form action="" className='flex flex-col md:flex-row md:flex-wrap mx-auto p-8 space-y-8'>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }} className='text-purple-950'>Contact Info</Typography>
                                <div className='flex w-full space-x-8'>
                                    <input type="text" placeholder="First Name*" className='w-1/2' />
                                    <input type="text" placeholder="Last Name*" className='w-1/2' />
                                </div>
                                <div className='flex w-full space-x-8'>
                                    <input type="text" placeholder="E-mail*" className='w-1/2' />
                                    <input type="text" placeholder="Phone #" className='w-1/2' />
                                </div>
                                <div className='flex w-full h-40'>
                                    <textarea placeholder="Message*" className='w-full'></textarea>
                                </div>
                                <div className='flex w-full justify-center'>
                                    <button className='bg-blue-900 text-white font-bold py-2 px-20 rounded-full focus:outline-none focus:ring focus:border-blue-300'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactUs
