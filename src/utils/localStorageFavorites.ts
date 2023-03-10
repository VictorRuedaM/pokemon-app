


function toggleFavorite(id: number) {
  
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if(favorites.includes(id)){
    favorites = favorites.filter(pokemonID => pokemonID !== id);

  }else{
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));


}


const existPokemonFavorites = (id: number): Boolean => {

  if(typeof window === 'undefined') return false;
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id)
}

const pokemons = (): number[] => {

  return JSON.parse(localStorage.getItem('favorites') || '[]');

}

export default {
  toggleFavorite,
  existPokemonFavorites,
  pokemons,
}
