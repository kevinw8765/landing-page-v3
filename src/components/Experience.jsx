import React from 'react'
import c from "../assets/c.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import java from "../assets/java.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import python3 from "../assets/python.png"
import pytorch from "../assets/pytorch.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import sql from "../assets/sqlite3.png"
import swiftui from "../assets/swiftui.png"
import lua from "../assets/lua.png"
import pandas2 from '../assets/pandas2.png'
import r from '../assets/RLogo.png'
import flaskLogo from '../assets/flask.png'
import mongodb from '../assets/mongodb.png'
import android from '../assets/android_java.png'
import expressjs from '../assets/express.png'
import figmaa from '../assets/figma.png'
import matplotlibb from '../assets/matplotlib.png'
import nextjss from '../assets/nextjs.png'
import numpyy from '../assets/numpy.png'

const Experience = () => {

  const techs = [
    {
        id: 1,
        src: python3,
        title: "Python",
        style: "shadow-blue-500"
    },
    {
        id: 2,
        src: java,
        title: "Java",
        style: "shadow-orange-500"
    },
    {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500"
    },
    {
        id: 4,
        src: html,
        title: "HTML",
        style: "shadow-orange-500"
    },
    {
        id: 5,
        src: css,
        title: "CSS",
        style: "shadow-blue-500"
    },
    {
        id: 6,
        src: reactImage,
        title: "React",
        style: "shadow-teal-500"
    },
    {
        id: 7,
        src: node,
        title: "Node JS",
        style: "shadow-green-500"
    },
    {
        id: 8,
        src: expressjs,
        title: "ExpressJS",
        style: "shadow-yellow-300"
    },
    {
        id: 9,
        src: nextjss,
        title: "NextJS",
        style: "shadow-white"
    },
    {
        id: 10,
        src: flaskLogo,
        title: "Flask",
        style: "shadow-teal-300"
    },
    {
        id: 11,
        src: pandas2,
        title: "Pandas",
        style: "shadow-blue-300"
    },
    {
        id: 12,
        src: numpyy,
        title: "NumPy",
        style: "shadow-blue-400"
    },
    {
        id: 13,
        src: matplotlibb,
        title: "Matplotlib",
        style: "shadow-blue-400"
    },
    {
        id: 14,
        src: pytorch,
        title: "PyTorch",
        style: "shadow-orange-500"
    },
    {
        id: 15,
        src: sql,
        title: "SQL",
        style: "shadow-blue-300"
    },
    {
        id: 16,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-400"
    },
    {
        id: 17,
        src: c,
        title: "C",
        style: "shadow-blue-500"
    },
    {
        id: 18,
        src: lua,
        title: "Lua",
        style: "shadow-blue-700"
    },
    {
        id: 19,
        src: r,
        title: "R",
        style: "shadow-blue-400"
    },
    {
        id: 20,
        src: swiftui,
        title: "SwiftUI",
        style: "shadow-blue-500"
    },
    {
        id: 21,
        src: android,
        title: "JavaFX + Java Android",
        style: "shadow-green-700"
    },
    {
        id: 22,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-blue-300"
    },
    {
        id: 23,
        src: figmaa,
        title: "Figma",
        style: "shadow-red-600"
    },
    {
        id: 24,
        src: github,
        title: "GitHub",
        style: "shadow-white"
    }
    
  ]
  return (

    <div name = "experience" className = "w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            
            <div>
                <p className = "text-4xl font-bold border-b-4 inline border-gray-500">
                    Experience
                </p>
            </div>

            <div className = "w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {techs.map(({id, src, title, style}) => (
                    <div key = {id} className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src = {src} alt = "" className = "w-20 h-20 mx-auto"/>

                        <p className = "mt-4">{title}</p>
                    </div>
                ))}
            </div>

             
        </div>
    </div>
  )
}

export default Experience