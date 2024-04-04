const { env } = process;
const { XDG_CURRENT_DESKTOP, NODE, HOSTNAME, SHELL } = env;

console.table({ XDG_CURRENT_DESKTOP, NODE, HOSTNAME, SHELL });

const frutas = ["🍎", "🍐", "🍇", "🍌", "🍉"];

// const [,pera, , ,] = frutas;

const  [ manzana, pera ,...fruits] = frutas
console.table({manzana,pera,fruits})

