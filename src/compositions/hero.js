import { Box, Button, Container, Image, Heading, Stack } from '@chakra-ui/react'

import Navbar from '../components/navbar'
import Delayed from '../components/delayed'

const Hero = () => (
  <>
    <Box
      position="absolute"
      zIndex={-1}
      w="full"
      h="930px"
      bgImage='url("images/background-pattern.png")'
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize={{ base: '1920px 930px', '2xl': '100% 930px' }}
    />

    <Box w="full">
      <Container maxW="1410px">
        <Navbar />
        <Box
          mt={['80px', 90, 100]}
          display={{ base: 'block', lg: 'none' }}
          w="90%"
        >
          <Heading
            fontWeight={800}
            fontSize={['38px', '50px', '54px', '58px', '60px']}
            color="white"
          >
            <Delayed>
              INCREASE{' '}
              <span style={{ color: 'var(--chakra-colors-black)' }}>
                SALES AND GENERATE
              </span>{' '}
              MORE LEADS
            </Delayed>
          </Heading>
        </Box>

        <Stack
          mt={{ base: 0, lg: 0 }}
          align={{ base: 'center', lg: 'start' }}
          direction="row"
        >
          <Stack mt={{ lg: 50, xl: 130 }} w="100%" spacing={5}>
            <Box display={{ base: 'none', lg: 'block' }} w="90%">
              <Heading
                fontWeight={800}
                fontSize={['48px', '50px', '54px', '58px', '60px']}
                color="white"
              >
                <Delayed>
                  INCREASE{' '}
                  <span style={{ color: 'var(--chakra-colors-black)' }}>
                    SALES AND GENERATE
                  </span>{' '}
                  MORE LEADS
                </Delayed>
              </Heading>
            </Box>

            <Stack direction="column">
              <Box
                w={{ base: '60%', md: '50%' }}
                fontSize={{ base: 18, md: 24 }}
                color="white"
              >
                <Delayed delay={0.2}>
                  High converting websites and landing pages
                </Delayed>
              </Box>
              <Box
                display={{ base: 'block', md: 'none' }}
                position="absolute"
                alignSelf="end"
                w="30%"
                transform={{
                  base: 'translateY(-5vw)',
                  sm: 'translateY(-20%)'
                }}
              >
                <Delayed from="right" delay={0.6}>
                  <Image src="images/tv-web-asset.png" />
                </Delayed>
              </Box>
            </Stack>

            <Delayed delay={0.4}>
              <Stack direction={{ base: 'column', xl: 'row' }} pt={5}>
                <Button
                  variant="bluesky"
                  bg="orange"
                  fontSize={{ base: 18, md: 24 }}
                  px={[6, 8]}
                  w={['100%', 'fit-content']}
                  maxW={{ base: 250, md: 320 }}
                >
                  START YOUR DESIGN
                </Button>

                <Button
                  variant="bluesky"
                  rightIcon={
                    <Image
                      w={34}
                      mt={-1}
                      ml={[0, 7]}
                      src="images/calendar-icon.png"
                    />
                  }
                  bg="yellow"
                  fontSize={{ base: 18, md: 24 }}
                  pl={[4, 8]}
                  w={['100%', 'fit-content']}
                  maxW={{ base: 250, md: 320 }}
                >
                  SCHEDULE A CALL
                </Button>
              </Stack>
            </Delayed>
          </Stack>

          <Box
            display={{ base: 'none', md: 'block' }}
            alignSelf="end"
            w={{ md: '70%', lg: '100%' }}
          >
            <Delayed from="up" delay={0.6}>
              <Image src="images/tv-web-asset.png" />
            </Delayed>
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
)

export default Hero
