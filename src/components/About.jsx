import React from 'react'
import { useState } from 'react'

const About = () => {
  
  const [sprite, setSprite] = useState('Kokushibo')

  

  return (
    <div name = "about" className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className = "pb-8">
                <p className = "text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>

                <p className = "text-xl text-gray-400 mt-20">
                Hi, my name is Kevin Wong, and I'm currently studying Computer Science at RU. 
                I am passionate about working in the tech industry and actively seeking internship opportunities in software development or data analytics. 
                 </p>

                <br/>

                <p className = "text-xl text-gray-400">
                With experience in technologies such as Python, Java, JavaScript, SQL, C, etc. and frameworks like React and Next.js,
                I am eager to apply my skills and contribute to innovative projects.
                </p>
                
            </div>

        </div>
    </div>
  )
}

export default About