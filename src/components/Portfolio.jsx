import React from 'react'
import finance from '../assets/portfolio/finance.png'
import movieRecommend from '../assets/portfolio/movie-recommend.png'
import inventory from '../assets/portfolio/inventory.png'
import workout from '../assets/portfolio/workout.jpg'

const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        title: 'Finance App',
        src: finance,
        href: 'https://github.com/kevinw8765/finance-app',
        finished: true,
        awaiting: false,
    },
    {
        id: 2,
        title: 'Movie Recommendation System',
        src: movieRecommend,
        href: 'https://github.com/kevinw8765/MovieSystem',
        finished: true,
        awaiting: false,
    },
    {
        id: 3,
        title: 'Inventory Management',
        src: inventory,
        href: 'https://github.com/kevinw8765/pantry-app',
        finished: false,
        awaiting: true
    },
    {
        id: 4,
        title: 'Workout App',
        src: workout,
        href: 'https://github.com/kevinw8765/workout-app',
        finished: false,
        awaiting: true
    },
    
  ]
  return (
    <div name = "portfolio" className = "w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className = "pb-8">
                <p className= "text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>

                <p className = "py-6 text-gray-400">Check out some project(s) currently building</p>

            </div>


            <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id, title, src, href, finished, awaiting}) => (
                        <div key = {id} className = "shadow-md shadow-gray-600 rounded-lg">
                            <div className = "text-center text-yellow-300 p-4">{title}</div>
                            <img src = {src} alt = "" className = "rounded-md hover:scale-105 duration-200 max-h-[200px] w-full"/>
                            <div className = "flex items-center justify-center">
                                <button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                {finished ?
                                    (<a target = '_blank' rel = "noreferrer" href = {href} className='text-green-500'>
                                        Code
                                    </a>) : 
                                    awaiting ? ( <a target = '_blank' rel = "noreferrer" href = {href} className='text-yellow-500'>
                                        Developing
                                    </a>) : (<p className = "text-red-500">In Progress</p>
                                    )
                                }
                                </button>
                                
                            </div>
                        </div>

                    ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio