import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { HiArrowRight } from "react-icons/hi2";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm Harshvardhan Gaikwad
                    </h2>
                    <p className='text-white py-4 max-w-md text-justify'>
                        I am a motivated Software Developer with a passion for coding, problem-solving, and creating impactful digital solutions. With knowledge of Java, C++, SQL, and Web Development, I enjoy turning ideas into functional applications. I am always eager to learn, adapt to new technologies, and grow as a developer while contributing to meaningful projects.
                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90  duration-300'>
                                <HiArrowRight size={18} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home