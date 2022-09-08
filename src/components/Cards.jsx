import React from 'react'
import style from '../style-sheets/Cards.module.scss'
import Card from './Card.jsx'

export default function Cards({pokemons}) {

    return (

        <div className={style.cards_container}>

            {pokemons && pokemons.map(p => <Card key={p.name + p.id} img={p.img} name={p.name} types={p.types} id={p.id} /> )}
        
        </div>

    )
}
