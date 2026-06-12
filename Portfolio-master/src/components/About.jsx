import React from 'react'

const About = () => {
  return (
    <div 
    name='about' 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-16'>Hello! I'm Harshvardhan Gaikwad, a passionate Computer Science & Engineering graduate from Dr. D.Y. Patil College of Engineering, Kolhapur. I have a deep interest in coding, problem-solving, and software development, and I am excited to kickstart my professional journey in the tech industry. I thrive in environments that encourage creativity, innovation, and continuous learning.
            </p>
            <br />
            <p className='text-xl'>
            I have completed software and web development internships where I gained hands-on experience with Java, Advanced Java, object-oriented programming, and front-end development technologies (HTML, CSS, and JavaScript). I enjoy building applications that streamline processes and improve user experience, such as billing systems and booking platforms.
            </p>
            <br />
            <p className='text-xl'>I’m always open to new challenges and opportunities to grow both professionally and personally. Feel free to browse through my portfolio, and don't hesitate to reach out if you'd like to collaborate or chat about technology!</p>
        </div>
    </div>
  )
}

export default About;