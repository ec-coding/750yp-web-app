import React from 'react'
import { Container, Box, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';

const ContactUs = () => {
    return (
        <div className='bg-sky-200'>
            <div id='au-top' className="flex justify-center items-center py-20">
                <Grid container xs={12} sm={5}>
                    <div className='mx-auto flex flex-col flex-1'>
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
                    <div className='flex flex-1 flex-col justify-end'>
                        <img src="https://i.imgur.com/WTSIkhv.png" alt="" className='pt-20' style={{ maxWidth: '80%', height: 'auto' }} />
                    </div>
                </Grid>
                <Grid container xs={12} sm={5}>
                    <div className='mx-auto space-y-8 flex flex-col'>
                        <div className='bg-white h-full w-full rounded-xl'>
                            <form action="" className='flex flex-col md:flex-row md:flex-wrap mx-auto w-1/2 py-16 space-y-8'>
                                <div className='flex w-full space-x-8'>
                                    <input type="text" placeholder="Name*" className='' />
                                    <input type="text" placeholder="E-mail*" className='' />
                                </div>
                                <div className='flex w-full'>
                                    <input type="text" placeholder="Phone #" className='' />
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
            </div>
        </div>
    )
}

export default ContactUs
