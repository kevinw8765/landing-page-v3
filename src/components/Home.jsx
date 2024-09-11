import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-scroll'



const Home = () => {
   
  return (
    <div name = "home" className = "pt-16 h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <div className = "max-w-screen-lg mx-auto  flex flex-col items-center h-full justify-center px-4 md:flex-row gap-3">
            <div className='flex flex-col gap-5'>
        
                <h2 className = "text-4xl text-rotate sm:text-7xl font-bold">I'm an Aspiring Software Engineer</h2>
        
 
                 <p className = "text-gray-400 py-6 max-w-md solid border-x-4 border-gray-500 p-4">I am a student at Rutgers University looking to gain experience in building and designing software. 
                    I am interested in web development technologies
                     like React, Tailwind CSS, and JavaScript.</p>
                <div>
                    <Link to ="portfolio" smooth duration = {500} className = "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-700 to-red-700 cursor-pointer">
                        Portfolio
                        <span className = "group-hover:rotate-90 duration-300">
                            <FaArrowRight size={25} className = "ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src = {HeroImage} alt = "toy poodle" className = "rounded-2xl mx-auto w-2/3 md:w-4/5 h-auto max-h-[1000px]"></img>
            </div>
        </div>
    </div>
  )
}

export default Home;