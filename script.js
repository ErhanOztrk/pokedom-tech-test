import {pokemonArray} from "pokemon.js"





// const displayPokemon = pokemon => {
//     const pokemonsContainer = document.querySelector('.card-container');
//     const newPokemons = pokemonArray.map(pokemon => {
//       const {
//               id,
//               name,
//               types,
//               sprite,
//             } = pokemon;
//       return `
//         <div class="pokemon-item" data-id="${id}">
//           <p>${name}</p>
//           <p>${types}</p>
//           <p>${sprite}</p>
//           <img src="${imgSrc}" alt="pokemon photo">
//        </div>
//       `;
//     }).join('');
//     pokemonsContainer.innerHTML = newPokemons;
//   };



let output="";
for (let pokemon of pokemonArray) {
  output += `
  <div class="pokemons">  
  <p class="id"${pokemon.id}"</p>
  <p class="name"${pokemon.name}"</p>
  <p class="types"${pokemon.types}"</p>
  <img src="${pokemon.sprite} alt="${pokemon.sprite}">
</div>
  `
}
const cardIndex=document.querySelector(".card-container").innerHTML;
