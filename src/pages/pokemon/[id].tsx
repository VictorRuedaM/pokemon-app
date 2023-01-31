import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { MainLayout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '@/api';
import { Pokemon, PokemonListResponse, Type, Species } from '@/interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Sprites } from '../../interfaces/pokemonDetails';
import { type } from 'os';
import { PokemonDetails } from '@/components/pokemon';
import { transform } from 'typescript';

interface Props {
  pokemon: Pokemon
  type: Species
}



const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const capitalize = (param: string): string => {
    return param[0].toLocaleUpperCase() + param.substring(1);
    
  }

    
  return (
    <MainLayout title={capitalize(pokemon.name)} >

      <PokemonDetails pokemon={pokemon}/>
      
    </MainLayout>
  )
}

export default PokemonPage


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const arrPokemons: string[] = [...Array(151)].map((value, index) => `${index + 1}`);
  
  return {
    paths: arrPokemons.map(id =>  (
      {
        params: {id}
      }
    )),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {id} = ctx.params as {id: string};

  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      
      pokemon: data
    }
  }
}