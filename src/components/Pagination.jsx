import React from 'react'
import style from '../style-sheets/Pagination.module.scss'

export default function Pagination({pagination, pokemonsPerPage, amountOfPokemons, currentPage}) {

    const amountOfPages = []

    for(let i = 1; i <= Math.ceil(amountOfPokemons/pokemonsPerPage); i++){
       
        amountOfPages.push(i)
    }

    function handleNext(){

        if(currentPage !== amountOfPages.length) pagination(currentPage + 1)

    }

    function handlePrevious(){

        if(currentPage !== 1) pagination(currentPage - 1)

    }

    return (

        <div className={style.pagination_container}>

            <div className={style.pagination}>

                <span onClick={handlePrevious}>{'<'}</span>
                {amountOfPages && amountOfPages.map(num => <span onClick={()=> pagination(num)} key={num} id={`span${num}`} className={`span${num}` === 'span1' ? `page ${style.currentPage}` : 'page'}>{num}</span> )}
                <span onClick={handleNext}>{'>'}</span>

            </div>
        
        </div>
    )
}
