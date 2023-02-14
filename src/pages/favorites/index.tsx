import { MainLayout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'

import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
import {NoFavorites} from '@/components/ui';
import { localFavorites } from '@/utils';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
   setFavoritePokemons(localFavorites.pokemons());
  }, []);
  
  return (
    
    <MainLayout title={'Favorites'}>

      {
        favoritePokemons.length === 0 
        ? <NoFavorites/>
        : (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            
            {
              favoritePokemons.map(id => (
                
                <Grid key={id} xl={1} xs={6} sm={3} md={2} >
                  <Card isHoverable isPressable css={{padding:10, background: '$gradient'}}>
                    <Card.Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                      width={'100%'}
                      height={140}

                    />

                  </Card>

                </Grid>
              ))
            }

          </Grid.Container>
        )

      }
      
      
    </MainLayout>
  )
}

export default Favorites;
