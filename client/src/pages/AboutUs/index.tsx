import React from 'react'
import styles from './styles.module.scss';

const AboutUs = () => {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div id='au-top' className="flex justify-center items-center pt-32 h-156">
        <div className="flex-initial h-full w-1/2 bg-gray-200 rounded-md">
          {/* ... */}
        </div>
        <div className="flex-initial h-full w-1/2 p-5 flex items-center justify-center">
          <div className='mx-auto h-3/4 w-3/4 space-y-8 flex flex-col'>
            <h2 className='text-4xl text-left font-bold'>
              Our Mission
            </h2>
            <div className='border-2 border-solid border-black h-full w-full'></div>
          </div>
        </div>
      </div>

      <div className='my-36'></div>

      <div id='au-mid' className="w-full">
        <h2 className='text-4xl text-center font-bold'>
          Our Team
        </h2>
        <div className='flex justify-center items-center h-128 overflow-x-auto'>
          <div className="flex-1 h-full w-full rounded-md flex flex-col justify-center items-center space-y-4 pl-52">
            <div className="bg-gray-200 rounded-full w-64 h-64"></div>
            <div className="border-2 border-solid border-gray-400 w-64 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-2xl text-center font-bold'>Lois Kim</h4>
              <h4 className='text-xl text-center font-bold'>Empress of Fluctuation</h4>
            </div>
          </div>
          <div className="flex-2 h-full w-full flex items-center justify-center">
            <div className='border-2 border-solid border-black h-2/3 w-3/4 space-y-8'>
              <p className='p-5 text-'>Short bio and description about the committee goes here.</p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                <h4 className='text-2xl text-center font-bold'>Landon Merigold</h4>
                <h4 className='text-xl text-center font-bold'>Minister of Culture</h4>
              </div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
          </div>

          <div className='bio-panel-container flex items-center justify-center space-x-8 overflow-x-auto'>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
            <div className='flex-initial bio-panel space-y-8'>
              <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
              <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center"></div>
            </div>
          </div>
        </div>

        <hr className='m-28' />

        <div id="faqs">

        <h2 className='text-4xl text-center font-bold'>Frequently Asked Questions</h2>

        </div>

      </div>
      <div id='au-bot' className=""></div>
    </div>
  )
}

export default AboutUs
