import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

const boxCategory = [
    {
        id: 1, categoryTitle: "Keep shopping for"
    },
    {
        id: 2, categoryTitle: "Shop by Category"
    },
    {
        id: 3, categoryTitle: "Get fit at home"
    },
    {
        id: 4, categoryTitle: "Shop Father's Day Gifts"
    },
    {
        id: 5, categoryTitle: "Beauty picks"
    },
    {
        id: 6, categoryTitle: "Deal of the day"
    },
    {
        id: 7, categoryTitle: "Health & Personal care"
    },
    {
        id: 8, categoryTitle: "Shop Home & Office"
    },
]

const BoxRow = () => {
    return (
        <>
            {boxCategory.map((box) => (
                <Box key={box.id} p={5} borderWidth="1px" style={{ border: "1px solid black" }}>
                    <h1>{box.categoryTitle}</h1>
                </Box>
            ))
            }
        </>
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