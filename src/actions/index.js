import axios from 'axios';

export function getPokemons(){

    return async (dispatch)=>{

        let { data } = await axios.get('https://pokemon-bda.onrender.com/pokemons')

        return dispatch({ type: 'GET_POKEMONS', payload: data })
    }
}

export function createPokemon(payload){

    return async(dispatch)=>{

        await axios.post('https://pokemon-bda.onrender.com/pokemons', payload)

        return dispatch({type: 'CREATE_POKEMON'})
    }
}

export function getTypes(){

    return async(dispatch)=>{

        let { data } = await axios.get('https://pokemon-bda.onrender.com/types')

        return dispatch({type: 'GET_TYPES', payload: data})
    }
}

export function getPokemonById(id){

    return async(dispatch)=>{

        let { data } = await axios.get(`https://pokemon-bda.onrender.com/pokemons/${id}`)

        return dispatch({type: 'GET_POKEMON_BY_ID', payload: data})
    }
}

export function filterPokemonsByType(type){

    return { type:'FILTER_BY_TYPE', payload: type }
}

export function filterPokemonsBySource(source){

    return { type:'FILTER_BY_SOURCE', payload: source }
}

export function sortPokemons(sortMethod){

    return { type: 'SORT_POKEMONS', payload: sortMethod }
}

export function getPokemonByName(name){

    return async(dispatch)=>{

        try{

            let { data } = await axios.get(`https://pokemon-bda.onrender.com/pokemons?name=${name}`)

            return dispatch({type: 'GET_POKEMON_BY_NAME', payload: data})

        }

        catch(e){

            alert(e.response.data)
        }

    }
    
}

export function deleteDbPokemon(id){

    return async(dispatch)=>{

        try{

            await axios.delete(`https://pokemon-bda.onrender.com/pokemons/${id}`)

            return dispatch({type: 'DELETE_DB_POKEMON'})

        }

        catch(e){

            alert(e.response.data)
        }
    }
 
}