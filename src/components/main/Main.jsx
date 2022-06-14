import { Stack, HStack, VStack, Box, Wrap, WrapItem } from '@chakra-ui/react'
import { boxCategory } from 'store/productboxes'

const BoxRow = () => {
    return (
        <Wrap spacing="30px" bg="yellow.200">
            {boxCategory.map((box) => (
                <WrapItem>
                    <Box key={box.id} p={5} borderWidth="1px" w='200px' h='300px' style={{ border: "1px solid blue" }}>
                        <h1>{box.categoryTitle}</h1>
                    </Box>
                </WrapItem>
            ))
            }
        </Wrap>
    )
}

const Main = () => {
    return (
        <>
            <HStack spacing={8} >
                <BoxRow />
            </HStack >
        </>
    )
}

export { Main }