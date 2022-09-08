import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPokemon, getTypes } from '../actions/index'
import { validate } from './FormValidation'
import style from '../style-sheets/Form.module.scss'

export default function Form() {

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.types)
    const history = useHistory()

    useEffect(()=>{

        dispatch(getTypes())

    }, [])

    const [input, setInput] = useState({

        name: '',
        experience: '',
        attack: '',
        defence: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    const [errors, setErrors] = useState({name: 'Your Pokemon needs to have a name'})

    function handleChange(e){

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate(input))
    }

    function handleSelect(e){

        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleTypeDelete(type){

        setInput({
            ...input,
            types: input.types.filter(t => t !== type)
        })
    }

    function handleSubmit(e){

        e.preventDefault()

        setErrors(validate(input))

        if(errors.name){

            alert("Your Pokemon's details have an error, please modify the form")
            return
        }

        if(input.img === '') delete input.img
        dispatch(createPokemon(input))
        alert('Pokemon Created')
        setInput({    
            name: '',
            experience: '',
            attack: '',
            defence: '',
            speed: '',
            height: '',
            weight: '',
            img: '',
            types: []
        })
        history.push('/pokemons')
    }

    return (
        
        < >
            <form className={style.form}>

                <div>
                    <label>Name:* <span>{errors.name && errors.name}</span></label>
                    <input value={input.name} placeholder='Name' name='name' type='text' onChange={handleChange}/>

                    
                    <label>Experience:</label>
                    <input value={input.experience} placeholder='Experience' name='experience' type='text' onChange={handleChange}/>
                    
                    <label>Image:</label>
                    <input placeholder='Image Url' name='img' type='url' onChange={handleChange}/>

                    <label>Types:</label>
                    <select onChange={(e)=> handleSelect(e)}>
                        {allTypes.map( t => <option name='types' key={t.id}>{t.name}</option>)}
                    </select>

                    <div className={style.types_list}>
                        {input.types.map( t => <div><li key={`${t}${Math.random()}`}>{t}</li> <button key={`${t}${Math.random()}button`} onClick={()=> handleTypeDelete(t)}>X</button></div>)}
                    </div>

                </div>

                <div>

                    <label>Attack: <span>{input.attack}</span></label>
                    <input value={input.attack} type="range" name="attack" min="0" max="200" onChange={handleChange} className={style.range} />
                    <label>Defence: <span>{input.defence}</span></label>
                    <input value={input.defence} type="range" name="defence" min="0" max="200" onChange={handleChange} className={style.range}/>
                    <label>Speed: <span>{input.speed}</span></label>
                    <input value={input.speed} type="range" name="speed" min="0" max="200" onChange={handleChange} className={style.range}/>
                    <label>Height: <span>{input.height} m</span></label>
                    <input value={input.height} placeholder='Height' name='height' type='range' min="0" max="3" step='0.1' onChange={handleChange} className={style.range} />
                    <label>Weight: <span>{input.weight} kg</span></label>
                    <input value={input.weight} placeholder='Weight' name='weight' type='range' min="0" max="1000" step='0.5' onChange={handleChange} className={style.range} />

                </div>

            </form>

            <button className={style.submit_button} onClick={handleSubmit}>Create Pokemon</button>
        
        </>
    )
}
