import React from 'react'

const ContactUs = () => {
    return (
        <div className='bg-sky-200'>
            <div id='au-top' className="flex justify-center items-center h-172">
                <div className="flex-initial h-full w-2/5 items-center justify-center">
                    <div className='mx-auto h-3/4 w-3/4 flex flex-col py-28 px-10'>
                        <h2 className='text-4xl font-bold my-1'>Want to learn more?</h2>
                        <h2 className='text-4xl font-bold my-1'>Get in touch!</h2>
                        <p className='mt-5 text-lg'>At 750YP, we are here to help you grow and connect with like-minded individuals.</p>
                    </div>
                </div>
                <div className="flex-initial h-full w-3/5 flex items-center justify-center">
                    <div className='mx-auto h-3/4 w-3/4 space-y-8 flex flex-col'>
                        <div className='bg-white h-full w-full'>
                            <form action="" className='flex flex-col md:flex-row md:flex-wrap mx-auto w-1/2 py-20 space-y-8'>
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
                </div>
            </div>
        </div>
    )
}

export default ContactUs
