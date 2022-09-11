import React from 'react'
import style from '../style-sheets/Cards.module.scss'
import Card from './Card.jsx'

export default function Cards({pokemons}) {

    return (

        <div className={style.cards_container}>

            {pokemons.length > 0 ? pokemons.map(p => <Card key={p.name + p.id} img={p.img} name={p.name} types={p.types} id={p.id} /> ) : <img className={style.gif} src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ee4b875-457c-4f95-8dc5-0817243a235a/d8ogz4y-a89404b5-cbfe-43ae-af86-1f46f45687bc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZTRiODc1LTQ1N2MtNGY5NS04ZGM1LTA4MTcyNDNhMjM1YVwvZDhvZ3o0eS1hODk0MDRiNS1jYmZlLTQzYWUtYWY4Ni0xZjQ2ZjQ1Njg3YmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WZnwNsqwI_04nmi8uhfnmmGtsJaFT3KBhiwVI6cx9ZI'} alt='pokeball gif' /> }
        
        </div>

    )
}
