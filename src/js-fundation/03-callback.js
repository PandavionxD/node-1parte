const names =[
    {
        id:1,
        name:'Alex Daniel'
    },{
        id:2,
        name:'Juan Carlos'
    }
]

const getUserById = (id,callback)=>{
    const user = names.find(data=>{
        return data.id === id
    })

    if(!user){
        return callback(`Usuario no encontrado con id - ${id}`)
    }
    return callback(null, user)
}


module.exports = {
    getUserById
}