import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className = "w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
            <div className = "pt-8">
                <p className = "text-4xl inline font-bold border-b-4 border-gray-500">Contact</p>

                <p className = "py-6 text-gray-400">Submit the form below</p>

            </div>
                <div className = "flex items-center justify-center">
                    <form method = "POST" action = "https://getform.io/f/ayvpqvpb" className = "flex flex-col w-full md:w-1/2">
                        <input type="text" name = "name" placeholder = "Enter your name"
                        className = "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

                        <input type="text" name = "email" placeholder = "Enter your email"
                        className = "my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name = "message" placeholder = "Enter a message" rows = "10" 
                        className = "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

                        <button className = "text-white bg-gradient-to-b from-transparent to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                    </form> 
                </div>
                
           
        </div>
    </div>
  )
}

export default Contact