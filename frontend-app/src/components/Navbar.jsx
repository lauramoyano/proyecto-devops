import { Flex,Box, Heading, Button, Spacer,  Text, HStack, Icon, IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  MenuDivider,
} from '@chakra-ui/react'



export default function Navbar() {
    return (

        <Flex as="nav"  h="16" p="10px" alignItems="center"  gap="10px">
           <IconButton icon={<HamburgerIcon/>}
                       display={{md:"none"}}/>
           <Heading as="h1">DropLibrary</Heading>
           <Spacer/>
            
           
           
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9' }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>profile</MenuItem>
                <MenuItem>settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          
        </Flex>

)
}