import React from 'react'
import finance from '../assets/portfolio/finance.png'
import movieRecommend from '../assets/portfolio/movie-recommend.png'
import inventory from '../assets/portfolio/inventory.png'

const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        title: 'Finance App',
        src: finance,
        href: 'https://github.com/kevinw8765'
    },
    {
        id: 2,
        title: 'Movie Recommendation System',
        src: movieRecommend,
        href: 'https://github.com/kevinw8765'
    },
    {
        id: 3,
        title: 'Inventory Management',
        src: inventory,
        href: 'https://github.com/kevinw8765'
    },
  ]
  return (
    <div name = "portfolio" className = "w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className = "pb-8">
                <p className= "text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>

                <p className = "py-6 text-gray-400">Check out some project(s) currently building</p>

            </div>


            <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id, title, src, href}) => (
                        <div key = {id} className = "shadow-md shadow-gray-600 rounded-lg">
                        <div className = "text-center">{title}</div>
                        <img src = {src} alt = "" className = "rounded-md hover:scale-105 duration-200 max-h-[200px] w-full"/>
                        <div className = "flex items-center justify-center">
                            <button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale:105"><a target = '_blank' rel = "noreferrer" href = {href}>Code</a></button>
                        </div>
                    </div>

                    ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio