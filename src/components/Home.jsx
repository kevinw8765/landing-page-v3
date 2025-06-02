import React from 'react'
import HeroImage from "../assets/heroImage.png"
import domo from "../assets/domo.jpeg"
import demonslayer from "../assets/demonslayer.jpeg"
import noodles from "../assets/noodles.jpeg"
import goldenmew from '../assets/goldenmew.jpeg'
import iceknight from '../assets/iceknight.jpeg'

import cake from '../assets/cake.jpeg'

import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-scroll'
import {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const Home = () => {
  const slides = [
    {
        src: HeroImage
    },
    {
        src: iceknight
    },
    {
        src: cake
    },
    {
        src: domo
    },
    {
        src: noodles
    },
    {
        src: demonslayer
    },
    {
        src: goldenmew
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div name = "home" className = "pt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <div className = "max-w-screen-lg mx-auto  flex flex-col items-center h-full justify-center px-4 md:flex-row gap-3">
            <div className='flex flex-col gap-5'>
        
                <h2 className = "text-4xl text-rotate sm:text-7xl font-bold">I'm an Aspiring Software Engineer</h2>
        
 
                 <p className = "text-gray-400 py-6 max-w-md solid border-x-4 border-gray-500 p-4">I am a student at Rutgers University looking to gain experience in building and designing software. 
                    I am particularly interested in software engineering, data science, AI/ML, app and web development roles. 
                    My top three strongest programming languages are: Python, Java, and JavaScript.
                    <br></br>
                    <br></br>
                    Feel free to contact me at kevinw8765@gmail.com if you have questions!
                </p>
                
                <div>
                    <Link to ="portfolio" smooth duration = {500} className = "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-700 to-red-700 cursor-pointer">
                        Portfolio
                        <span className = "group-hover:rotate-90 duration-300">
                            <FaArrowRight size={25} className = "ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            {/* Carousel */}
            <div className='rounded-2xl relative'>

                <img src = {slides[currentIndex].src} alt = "toy poodle" className = "duration-500 rounded-2xl mx-auto w-2/3 md:w-4/5 h-auto max-h-[1000px]"></img>
                {/* Left Arrow */}
                <div  className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>

                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key = {slideIndex} onClick = {() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;