import { MainLayout } from '@/components/layouts';
import {NoFavorites} from '@/components/ui';

import { Container, Image, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { localFavorites } from '@/utils';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
   setFavoritePokemons(localFavorites.pokemons());
  }, []);
  
  return (
    
    <MainLayout title={'Favorites'}>
      
      <NoFavorites/>
    </MainLayout>
  )
}

export default Favorites;
