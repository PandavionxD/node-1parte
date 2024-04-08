const  { http }  = require("../script");

const getPokemon = async (id) => {
  const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await http.get(url);
  // throw new Error ('Ups paso algo malo, lo siento 😥😥😥')
  return resp.name;
};

module.exports = {
  getPokemon,
};
