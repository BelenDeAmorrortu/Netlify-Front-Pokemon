
const myRegex = /[\W\d]/g

export function validate(input){

    let errors = {}

    if(!input.name){

        errors.name = 'Your Pokemon needs to have a Name'
    }

    else if(myRegex.test(input.name)){

        errors.name = "Numbers, special characters and spaces aren't allowed"
    }

    return errors
}