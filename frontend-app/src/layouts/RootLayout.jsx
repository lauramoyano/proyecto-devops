import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Siderbar from "../components/Siderbar"


export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(8, 1fr)" bg="gray.50">
      <GridItem as="aside" 
                w={{ sm: 170,lg: 240}}
                colSpan={{base: 0, sm: 0, md: 1, lg: 1, xl: 1}}
                bg="purple.400" 
                minHeight={{ lg:"100vh"}} 
                p={{base: "0px", lg:"0px"}}
                display={{ base:"none", md:"block", lg: "block", xl: "block"}}>
        <Siderbar />
      </GridItem>
      <GridItem as="main"
                colSpan={{base: 8, sm: 8, md: 7, lg: 7, xl: 7}}>
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}