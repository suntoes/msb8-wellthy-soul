import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid
} from '@chakra-ui/react'

import Delayed from '../components/delayed'
import StyledAccordion from '../components/styled-accordion'

const pictures = [
  {
    src: 'images/web-asset-2a.png',
    transform: 'rotate(-10deg) scale(1.2)'
  },
  {
    src: 'images/web-asset-2b.png',
    transform: 'translateX(7%) translateY(10%) scale(1.4) rotate(10deg)'
  },
  {
    src: 'images/web-asset-2c.png',
    transform: 'rotate(-5deg) scale(1.2)'
  }
]

const process = [
  {
    title: 'Functional Medicine',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  },
  {
    title: 'Nourishment',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  },
  {
    title: 'Movement/Fitness',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  },
  {
    title: 'Time Management Practice',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  },
  {
    title: 'Mindset Work',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  },
  {
    title: 'Soul Work',
    description: `The first foundation is functional medicine. One of our three functional medicine
      doctors will order a functional medicine blood panel plus uranalysis after the blod work is 
      returned. Your doctor will review a 30-minute appointment line-by-line to discuss your current
      state of health. All of your questions will be answered. The doctor will make suggestions to 
      improve your health and wellness.`
  }
]

const SuccessRate = () => (
  <>
    <Box w="full">
      <Container maxW={1150} py={[30, 35, 50]} align="center" centerContent>
        <SimpleGrid maxW={950} columns={pictures.length} my={[9, 11, 16]}>
          {pictures.map(({ src, transform }, i) => (
            <Delayed
              key={'showcase-' + i}
              from={i % 2 ? 'down-cw' : 'down-ccw'}
              fromOpaque={false}
              delay={i * 0.1}
              hoverable={true}
            >
              <Image
                src={src}
                transform={transform}
                zIndex={i}
                filter="drop-shadow(0 5px 5px #00000055)"
              />
            </Delayed>
          ))}
        </SimpleGrid>

        <Heading fontSize={[36, 42, 60]}>The 6 Step Process</Heading>

        <StyledAccordion data={process} />

        <Delayed hoverable={true}>
          <Center
            maxW={707}
            bg="teal"
            color="white"
            p={25}
            mt={8}
            borderRadius={12}
          >
            <Heading fontSize={[29, 34, 49]}>
              Ready to make a TRANSFORMATION?
            </Heading>
          </Center>
          <Center maxW={707}>
            <Box
              bg="teal"
              boxSize={55}
              zIndex={-1}
              transform="translateY(-55%) rotate(45deg) scale(1.1)"
            />
          </Center>
        </Delayed>

        <Delayed>
          <a
            href="https://form.typeform.com/to/pAEdzY96?typeform-source=trello.com#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx"
            target="_blank"
          >
            <Button
              maxW={707}
              fontSize={[24, 28, 40]}
              mb={4}
              variant="gradient-red"
              paddingInline={8}
            >
              Schedule a FREE INTRO call today
            </Button>
          </a>
        </Delayed>
      </Container>
    </Box>
  </>
)

export default SuccessRate
