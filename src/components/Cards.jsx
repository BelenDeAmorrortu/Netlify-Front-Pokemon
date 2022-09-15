import React from 'react'
import style from '../style-sheets/Cards.module.scss'
import Card from './Card.jsx'
import Pokeball from '../img/PokeballLoading.gif'

export default function Cards({pokemons, msg}) {

    return (

        <div className={style.cards_container}>

            {pokemons.length > 0 ? pokemons.map(p => <Card key={p.name + p.id} img={p.img} name={p.name} types={p.types} id={p.id} /> ) : <div className={style.loading}><img src={Pokeball} alt='pokeball gif' className={style.gif} /><span>{msg}</span></div>}
        
        </div>

    )
}
