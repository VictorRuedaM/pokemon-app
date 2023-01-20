import { FC,  ReactNode } from "react"
import Head from "next/head"

import { NavBar } from "../ui";

interface Props {
  title?: String;
  children: ReactNode
}
export const MainLayout: FC<Props> = ({children, title}) => {

  
  return (
    <>
      {/* Headers */}
      <Head>
        
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Victor Rueda"/>
        <meta name="description" content="Information about pokemon ???"/>
        <meta name="keywords" content="???, pokemon, pokedex, power, pokemo go"/>
      </Head>
      {/* Navbar */}
      <NavBar/>

      {/* Main */}

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>

    </>
  )
}
