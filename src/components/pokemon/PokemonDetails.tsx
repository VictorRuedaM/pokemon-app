import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { localFavorites } from "@/utils";
import { Pokemon } from '../../interfaces/pokemonDetails';


interface Props {
  pokemon: Pokemon;
}

export const PokemonDetails: FC<Props> = ({pokemon}) => {

  const onToggleFavorite = () => {

    localFavorites.toggleFavorite(pokemon.id);
  }

  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "./no-image.png"
              }
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}
            </Text>

            <Button color="gradient" ghost onPress={onToggleFavorite}>
              Save to favorites
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Abilities</Text>
            <Container direction="row" display="flex" justify="space-evenly">
              {pokemon.abilities.map((a) => (
                <Text h5 transform="capitalize" key={a.ability.name}>
                  {a.ability.name}
                </Text>
              ))}
            </Container>
            <Text size={30}>Type</Text>

            <Container direction="row" display="flex" justify="space-evenly">
              {pokemon.types.map((t) => (
                <Text h5 transform="capitalize" key={t.type.name}>
                  {t.type.name}
                </Text>
              ))}
            </Container>

            <Text size={30}>Sprites</Text>

            <Container direction="row" display="flex">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
