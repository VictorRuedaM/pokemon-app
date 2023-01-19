import { Button } from "@nextui-org/react";
import { MainLayout } from '../components/layouts';


export default function HomePage() {
  return (
    <MainLayout title={'Pokemon list'}>
      <h1>Home page</h1>
      <Button color='gradient'>Send</Button>
    </MainLayout>
  )
}
