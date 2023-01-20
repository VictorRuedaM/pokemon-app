import { FC } from 'react';
import {GetStaticProps} from 'next';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { pokeApi } from '../api';
import { MainLayout } from '../components/layouts';
import { PokemonContainer } from '@/components/pokemon';





interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: FC<Props> = ({pokemons}) => {

  
  return (
    <MainLayout title={'Pokemon list'}>
     <PokemonContainer pokemons={pokemons}/>
    </MainLayout>
  )
}

export default HomePage;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  // const { data } = await  // your fetch function here 
  const pokemons = data.results.map((pokemon, index) => (
    {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    }
  ));

  return {
    props: {
      pokemons
    }
  }
}