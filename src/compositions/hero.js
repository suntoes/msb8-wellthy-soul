import { Box, Button, Container, Image, Heading, Stack } from '@chakra-ui/react'

import Navbar from '../components/navbar'

const Hero = () => (
  <>
    <Container position="absolute" maxW="100vw" centerContent>
      <Container px={5} maxW="1410px">
        <Navbar />

        <Stack direction="row">
          <Stack mt={130} spacing={5}>
            <Box w="90%">
              <Heading fontWeight={800} fontSize="60px" color="white">
                INCREASE{' '}
                <span style={{ color: 'var(--chakra-colors-black)' }}>
                  SALES AND GENERATE
                </span>{' '}
                MORE LEADS
              </Heading>
            </Box>

            <Box w="50%" fontSize={24} color="white">
              High converting websites and landing pages
            </Box>

            <Stack direction="row">
            <Button bg="orange" fontSize={24} px={8}>
              START YOUR DESIGN
            </Button>

            <Button 
              rightIcon={<Image w={34} mt={-1} ml={7} src="images/calendar-icon.png" />}
              bg="yellow" 
              fontSize={24} 
              pl={8}
            >
              SCHEDULE A CALL
            </Button>
            </Stack>
         </Stack>

          <Box w="100%">
            <Image src="images/tv-web-asset.png" />
          </Box>
        </Stack>
      </Container>
    </Container>

    <Box>
      <Image src="images/background-pattern.png" />
    </Box>
  </>
)

export default Hero
