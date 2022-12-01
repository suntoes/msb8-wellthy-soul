import { Fragment } from 'react'

import {
  Box,
  Container,
  Image,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const expectationList = [
  {
    iconSrc: 'images/coin-icon.png',
    title: 'Competitive\nPricing',
    description: `We offer fair prices that allow you to allocate your media budget without sacrificing quality.`
  },
  {
    iconSrc: 'images/boost-icon.png',
    title: 'Fast\nTurnaround',
    description: `Don't wait weeks for your designs. Our turnaround times are fast allowing your business move fast.`
  },
  {
    iconSrc: 'images/hike-icon.png',
    title: 'High\nPerformance',
    description: `Our output has 15 years of proven performance that will put your landing pages ahead of your competitors.`
  },
  {
    iconSrc: 'images/customer-support-icon.png',
    title: 'Amazing\nCustomer Service',
    description: `We pride ourselves on amazing customer service and great communication is one of our core values`
  }
]

const WorkExpectation = () => (
  <Box
    overflowX="clip"
    zIndex={0}
    w="full"
    my="-330px"
    bgImage='url("images/background-pattern-01.png")'
    bgRepeat="no-repeat"
    bgPosition="center"
    bgSize={{ base: '100% 100%', '2xl': '100% 100%' }}
  >
    <Container py="240px" maxW="930px">
      <Heading
        fontWeight={800}
        fontSize={['36px', '39px', '42px', '45px', '48px']}
      >
        WHAT
        <Text>YOU CAN EXPECT</Text>
        <Delayed from="right" fromOpaque={false} onView={true}>
          <Text color="blue">FROM OUR WORK</Text>
        </Delayed>
      </Heading>
      <SimpleGrid mb={20} columns={{ base: 2, md: 4 }}>
        {expectationList.map(({ iconSrc, title, description }, i) => (
          <Fragment key={'expectation-' + (i + 1)}>
            <Delayed
              from="down"
              fromOpaque={false}
              onView={true}
              delay={0.4 * i}
              hoverable
            >
              <Stack
                mt={10}
                align="center"
                key={'expect-' + (i + 1)}
                spacing={4}
              >
                <Image src={iconSrc} />
                <Box
                  display="flex"
                  h="65px"
                  pt={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading
                    w="full"
                    whiteSpace="pre-wrap"
                    align="center"
                    fontSize={{ base: 18, md: 24 }}
                  >
                    {title}
                  </Heading>
                </Box>
                <Box w="full" align="center" px={5}>
                  {description}
                </Box>
              </Stack>
            </Delayed>
          </Fragment>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export default WorkExpectation
