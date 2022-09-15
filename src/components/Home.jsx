import React, {useState} from 'react'
import Cards from './Cards.jsx'
import Pagination from './Pagination.jsx'
import style from '../style-sheets/Home.module.scss'
import { useSelector } from 'react-redux'
import Nav from './Nav.jsx'
import paginationStyle from '../style-sheets/Pagination.module.scss'

export default function Home(){

    const allPokemons = useSelector(state => state.pokemons)

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemonOfPage = currentPage * pokemonsPerPage
    const indexOfFirstPokemonOfPage = indexOfLastPokemonOfPage - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemonOfPage, indexOfLastPokemonOfPage)

    const [sort, setSort] = useState()
    const [loadingMsg, setLoadingMsg] = useState('')

    function pagination(pageNumber){

        setCurrentPage(pageNumber)
        
        let spans = document.querySelectorAll('.page')

        spans.forEach(s => s.id === `span${pageNumber}` ? s.classList.add(`${paginationStyle.currentPage}`) : s.classList.remove(`${paginationStyle.currentPage}`))
        
    }

    return (

        <div className={style.home_container}>

            <Nav setSort={setSort} setLoadingMsg={setLoadingMsg}/>

            <Cards pokemons={currentPokemons} sorted={sort} msg={loadingMsg}/>
            <Pagination pagination={pagination} pokemonsPerPage={pokemonsPerPage} amountOfPokemons={allPokemons.length} currentPage={currentPage} />

        </div>
    )
}
