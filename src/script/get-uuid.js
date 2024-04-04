const { v4: uuidv4 } = require('uuid');

const getUuidScript = ()=>{
    return uuidv4()
}

module.exports = {
    getUuidScript
}