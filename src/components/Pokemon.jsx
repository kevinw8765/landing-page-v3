import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pokemon = () => {
  
  const [favPokemon, setFavPokemon] = useState([
    {
        id: 1,
        pokemon: "yveltal"
    },
    {
        id: 2,
        pokemon: "dragonite"
    },
    {
        id: 3,
        pokemon: "heracross"
    },
    {
        id: 4,
        pokemon: "rayquaza"
    },
    {
        id: 5,
        pokemon: "greninja"
    },
    {
        id: 6,
        pokemon: "pikachu"
    }
  ])
  
  const [sprites, setSprites] = useState({})
  const [pokemon, setPokemon] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const sprite = await fetchPokemon(pokemon);

    if (sprite) {
        setFavPokemon((prevFavs) => [
            ...prevFavs, {id: prevFavs + 1, pokemon: pokemon.toLowerCase()}
        ])

        setSprites((prevSprites) => ({
            ...prevSprites, [pokemon.toLowerCase()]: sprite
        }))

        setPokemon('')
    }
    } catch (error) {
        console.error('Error fetching: ', error)
    }
    
  }

  useEffect(() => {
    favPokemon.forEach(async (poke) => {
        const sprite = await fetchPokemon(poke.pokemon)
        setSprites((prevSprites) => ({
            ...prevSprites, [poke.pokemon]: sprite,
        }))
    })
  }, [favPokemon])
  async function fetchPokemon (pokemon) {
     
    pokemon = pokemon.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (!response.ok) {
        throw new Error("Could not fetch pokemon")
    }

    const data = await response.json()
    const pokemonSprite = data.sprites.front_default

    return pokemonSprite

  }
  
  return (
    <div name = "pokemon" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div>
                <p className='text-4xl font-bold'>My Favorite Pokemon</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {favPokemon.map((poke) => (
                    <div key = {poke.id} className='flex flex-col'>

                        <p>{poke.pokemon}</p>
                       <img src = {sprites[poke.pokemon]} alt={poke.pokemon} className='mx-auto'/>
                       
                    </div>
                ))}

            </div>
            <form onSubmit={handleSubmit} className = "flex flex-col justify-center items-center mt-10">
                <input type = "text" placeholder='Enter a pokemon' value = {pokemon} onChange = {(e) => setPokemon(e.target.value)} className='p-4 rounded w-1/3 h-1/2 text-center text-black'/>
                <button type = "submit" className = "p-4 rounded bg-blue-400 w-1/3 h-1/2">Add a Pokemon</button>
            </form>
            
        </div>
    </div>
  )
}

export default Pokemon