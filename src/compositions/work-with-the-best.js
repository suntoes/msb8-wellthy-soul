import {
  Box,
  Button,
  Container,
  Image,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const WorkWithTheBest = () => (
  <Box
    overflowX="clip"
    bgImage="url(images/background-asset-01.png)"
    bgPosition={{ base: 'center', xl: 'left' }}
    bgRepeat="no-repeat"
    py="150px"
    w="full"
  >
    <Container maxW="930px">
      <Heading
        fontWeight={800}
        fontSize={['36px', '39px', '42px', '45px', '48px']}
        mb="1rem"
      >
        Work
        <Delayed onView={true} fromOpaque={false}>
          <Text color="blue">WITH THE BEST</Text>
        </Delayed>
      </Heading>

      <Stack align="center" direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack w="full">
          <Box
            fontSize={{ base: 18, md: 24 }}
            mb={{ base: '1rem', md: '2rem' }}
          >
            When you work with Bluesky you are not just working with a design
            company. With every design, get an expert set of eyes from marketing
            veterans. Pretty sites from other design companies may look nice,
            but when every acquisition counts make sure you are working with the
            best by choosing BlueSky.
          </Box>

          <Delayed onView={true} delay={0.2} fromOpaque={false}>
            <Button
              variant="bluesky"
              bg="yellow"
              fontSize={{ base: 18, md: 24 }}
              px={[6, 8]}
              w={['100%', 'fit-content']}
              maxW={{ base: 250, md: 320 }}
            >
              START YOUR DESIGN
            </Button>
          </Delayed>
        </Stack>

        <Box w={{ base: '70%', md: 'full' }}>
          <Delayed
            onView={true}
            from="right"
            fromOpaque={false}
            delay={0.4}
            hoverable={true}
          >
            <Image src="images/development-web-asset.png" />
          </Delayed>
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default WorkWithTheBest
