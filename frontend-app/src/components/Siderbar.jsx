import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Heading, List, ListIcon, ListItem, Divider, Box, useColorModeValue, Flex, CloseButton, Link, Text} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export  default function Siderbar() {

    const navigate = useNavigate();
    return (
        <Box transition="3s ease">
 
        <Flex justifyContent={"center"} alignContent={"center"}>
            <Heading as="h1">Drop</Heading>

        </Flex>
        
        <NavItem onClick={() => navigate("/")} >
           Books
        </NavItem>
        <NavItem onClick={() => navigate("create")}>
           Create
        </NavItem>
        <NavItem onClick={() => navigate("profile")}>
           Users
        </NavItem>

      </Box>
    )
}

const NavItem = ({ icon, children, ...rest }) => {
    return (
 
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'purple.600',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>

    );
  };