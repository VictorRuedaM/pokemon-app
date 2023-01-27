import Image from "next/image"
import Link from "next/link"
import { useTheme, Text, Spacer} from "@nextui-org/react"


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

      <Link href='/'>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt='Pikachu'
          width={70}
          height={70}
                
        />
      </Link>
      
      
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okemon</Text>

      <Spacer css={{
        flex: 1
      }}/>
      <Text color="white" >Favorites</Text>
    </div>
  )
}
