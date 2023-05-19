import { Heading, 
  Text, 
  Box,  
  Container, 
  SimpleGrid,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,} from "@chakra-ui/react";

import { useEffect, useState } from "react";
const libros =  [{    "isbn": "9781984801810",    "title": "LWhere the Crawdads Sing",    "score": 4.5,    "published_date": "2018-08-14",    "category": "Fiction",    "author": "Delia Owens",    "editorial": "G.P. Putnam's Sons"  }]



export default function Dashboard() {

    const [books, setBooks] = useState([]);
 
    useEffect(() => {
      setBooks(libros);
    }, []);

    return (
        <SimpleGrid columns={1} spacing="10px" p="5">
            <Box bg='purple.400' w='100%' p={4} color='white'>
              List of Books
            </Box>
           
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Isbn</Th>
                    <Th>Title</Th>
                    <Th>Score</Th>
                    <Th>Published date</Th>
                    <Th>Category</Th>
                    <Th>Author</Th>
                    <Th>Editorial</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {books.map( book =>(
                  <Tr key={book.isbn}>
                    <Td>{book.isbn}</Td>
                    <Td>{book.title} </Td>
                    <Td>{book.score} </Td>
                    <Td>{book.published_date} </Td>
                    <Td>{book.category}  </Td>
                    <Td>{book.author} </Td>
                    <Td>{book.editorial} </Td>
                   </Tr>
                ))}
            

                </Tbody>
              </Table>
            </TableContainer>
           
        </SimpleGrid>
            
    )
}