
const nameRegex = /[\W\dA-Z]/g

const urlRegex = /http(|s):.*\.(jpg|png|jpeg|gif)/g

export function validate(input, value){

    let error

    if(input === 'name'){

        if(value === '') error  = 'Your Pokemon needs to have a Name'
        else if(nameRegex.test(value)) error= "Numbers, special characters, spaces and uppercase aren't allowed"   

    }

    else{

        if(!urlRegex.test(value) && value != "") error = "Url is not valid"
    }
    
    return error
}