const getAge = require('age-by-birthdate')

const getAgeScript = (brithday)=>{
    if (!brithday) throw new Error('La fecha de cumpleaños es obligatoria')
    return  getAge(brithday)
}

module.exports = {
    getAgeScript
}