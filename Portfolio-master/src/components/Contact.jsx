import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg  mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          {/* 
                  TODO: Create a free account at https://getform.io, create a form, 
                  and replace the action URL below with your unique form endpoint.
                  Example: action="https://getform.io/f/YOUR_FORM_ID"
                */}
          <form action="https://formsubmit.co/gaikwadharshvardhan423@gmail.com" method='POST' className='flex flex-col w-full md:w-1/2'>
            {/* Honeypot spam protection */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            {/* Disable captcha screen for direct submissions */}
            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name='name' placeholder='Enter Your Name' required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
            <input type="email" name='email' placeholder='Enter Your Email' required className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
            <textarea name="message" rows="10" placeholder="Enter Your Message" required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact