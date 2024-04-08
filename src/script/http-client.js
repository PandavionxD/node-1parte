// CAMBIANDO EN VEZ DE UTILIZA FETCH UTILIZAREMOS AXIOS
const axios = require('axios');

const httpClient ={
    get : async (url)=>{
        // const data = await fetch(url)
        // const res =await  data.json()
        const {data} = await axios.get(url)
        return data
    },
    post:(body,url)=>{

    },
    put :(body,url)=>{

    },
    delete :(url)=>{

    }
}

module.exports = {
    http: httpClient
}