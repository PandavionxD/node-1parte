// require('./js-fundation/02.desestructuracion')
// const { template } = require("./js-fundation/01-template");
// const  {getUserById} = require("./js-fundation/03-callback");
// require('./js-fundation/04-factory')

// const { getAgeScript, getUuidScript } = require("./script");
// const { maketGetUser } = require("./js-fundation/04-factory");
const { getPokemon } =require('./js-fundation/05-pokemon-api')

getPokemon(82).then((poke)=>{
  console.log({poke})
}).catch((error)=>{
  console.log(error)
}).finally(()=>{
  console.log('peticion http terminada 😊')
})


// FUNCION DE ENCAPSULAMIENTO, BUENAS PRACTICAS
// const maketGetUser1 = maketGetUser(getUuidScript, getAgeScript);
// const obj = {
//   name: "alex",
//   brithday: "1993/11/25",
// };

// const value1 = maketGetUser1(obj);
// console.log(value1);




// FUNCION DENTRO DE UNA FUNCION
// const id = 1
// getUserById(id,(error,user)=>{
//     if(error){
//         throw new Error(error)
//     }
//     console.log(user)
// })
