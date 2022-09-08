import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Cards from './Cards.jsx'
import Pagination from './Pagination.jsx'
import style from '../style-sheets/Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../actions'
import Nav from './Nav.jsx'

export default function Home(){

    // const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemonOfPage = currentPage * pokemonsPerPage
    const indexOfFirstPokemonOfPage = indexOfLastPokemonOfPage - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemonOfPage, indexOfLastPokemonOfPage)

    const [sort, setSort] = useState()

    function pagination(pageNumber){

        setCurrentPage(pageNumber)
    }

    // useEffect(()=>{

    //     dispatch(getPokemons())
    //     console.log('Hice llamado a Pokemons')

    // }, [])

    return (

        <div className={style.home_container}>

            <Nav setSort={setSort} />

            <Cards pokemons={currentPokemons} sorted={sort} />
            <Pagination pagination={pagination} pokemonsPerPage={pokemonsPerPage} amountOfPokemons={allPokemons.length} />

        </div>
    )
}
