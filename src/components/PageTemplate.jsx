import React from 'react'
import style from '../style-sheets/PageTemplate.module.scss'
import { NavLink } from 'react-router-dom'

export default function PageTemplate({img, content}) {

    useEffect(()=>{

        window.scrollTo(0, 0)

    }, [])

    return(

        <div className={style.container}>

            <header>

                <NavLink to='/pokemons'>
                    <button>{'< Home Page'}</button>
                </NavLink>

                <img src={img} />

            </header>

            <div className={style.content}>

                {content}

            </div>
        
        </div>
    )
}
