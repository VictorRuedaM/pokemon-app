import { FC } from 'react';
import {GetStaticProps} from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { MainLayout } from '../components/layouts';
import Image from 'next/image';


interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: FC<Props> = ({pokemons}) => {

  
  return (
    <MainLayout title={'Pokemon list'}>
     <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map(({id, name, img}) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card isHoverable isPressable>
              <Card.Body css={{p: 1}}>
                <Card.Image src={img} width='100%' height={140}/>
              </Card.Body>
              <Card.Footer>
                <Row justify='space-between'>
                  <Text transform='capitalize'css={{
                     textGradient: "55deg, $blue900 -20%, $yellow600 60%",
                    }}>{name}
                  </Text>
                  <Text># {id}</Text>
                </Row>
              </Card.Footer>
            </Card>

          </Grid>
        ))
      }
      
     </Grid.Container>
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