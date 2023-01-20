import {GetStaticProps} from 'next';
import { MainLayout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse } from '@/interfaces';



export default function HomePage(props) {

  console.log({props});
  return (
    <MainLayout title={'Pokemon list'}>
     <ul>
      <li>pokemon</li>
      <li>pokemon</li>
      <li>pokemon</li>
      <li>pokemon</li>
      <li>pokemon</li>
      <li>pokemon</li>
     </ul>
    </MainLayout>
  )
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  // const { data } = await  // your fetch function here 
  
  return {
    props: {
      pokemons: data.results
    }
  }
}