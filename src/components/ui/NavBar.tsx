import Image from "next/image"
import NextLink from "next/link"

import { useTheme, Text, Spacer, Link} from "@nextui-org/react"



export const NavBar = () => {

  const {theme} = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexBasis: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray200.value
      
    }}>

      <Link href='/' as={NextLink}>
          <Image
            // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            src='https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'
            alt='Pikachu'
            width={50}
            height={50}
                  
          />
      
      
        
        
          <Text color="yellow" css={{ marginLeft: "10px" }} h2>P</Text>
          <Text color="yellow" h3>okemon</Text>
        
      </Link>
      <Spacer css={{
        flex: 1
      }}/>

      <Link href={'/favorites'} as={NextLink}>
        <Text color="yellow" >Favorites</Text>
      </Link>
      
    </div>
  )
}
