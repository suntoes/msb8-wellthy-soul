import { useEffect, useRef, useState } from 'react'

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import Delayed from '../components/delayed'

const processList = [
  {
    title: 'Discussion',
    description: `As we stated before, amazing communication is one of our core values. We will have an initial discussion with you
      to lay a strong foundation to make sure the final output is above and beyond what you expected.`
  },
  {
    title: 'Action',
    description: `Action is where the magic happens and your design starts to come to life. Once the final design is ready for proof
      it is reviewed by our marketing experts before it is sent to you. After your final approval we will move to the front-end coding.`
  },
  {
    title: 'Delivery',
    description: `Delivery is where your creation is visible to the world. We will be able to run through our Quality Assurance and test
      for any bugs. You will also be able to make any additional edits.`
  }
]

const ProcessBox = ({ title, description, index }) => (
  <Stack w={{ base: 'full', md: '32%' }} maxW="390px">
    <Delayed onView={true} delay={0.2 * index}>
      <Flex align="center" color="violet">
        <Center
          zIndex={1}
          bg="white"
          boxSize="70px"
          mr="-35px"
          borderRadius="full"
          border="5px solid var(--chakra-colors-blue)"
          boxSizing="border-box"
        >
          <Heading fontSize={24}>{index + 1}</Heading>
        </Center>
        <Box
          display="flex"
          alignItems="center"
          h="55px"
          pl="50px"
          flex={1}
          bg="none"
          bgImage="linear-gradient(90deg, white 0 75%, #ffffff00 100%)"
        >
          <Heading fontSize={24}>{title}</Heading>
        </Box>
        {index < 2 && (
          <Delayed onView={true} delay={0.4 * index}>
            <ArrowForwardIcon
              fontSize={index === 0 ? 50 : 70}
              color="white"
              ml={-35}
            />
          </Delayed>
        )}
      </Flex>
    </Delayed>
    <Box color="white" pl="22%" pr="15%">
      <Delayed onView={true} delay={0.2 * index}>
        {description}
      </Delayed>
    </Box>
  </Stack>
)

const OurProcess = () => {
  const [containerHeight, setContainerHeight] = useState(667)
  const containerRef = useRef()

  const windowRezizeHandler = () => {
    clearTimeout(localStorage.getItem('bg-height-timer-01'))
    const timer = setTimeout(() => {
      if (containerRef) {
        setContainerHeight(containerRef.current.clientHeight)
      }
    }, 50)
    localStorage.setItem('bg-height-timer-01', timer)
  }

  useEffect(() => {
    windowRezizeHandler()
    window.addEventListener('resize', windowRezizeHandler)
    return () => window.removeEventListener('resize', windowRezizeHandler)
  }, [])

  return (
    <Box w="full" pt={8} overflowX="clip">
      <Box position="absolute" w="full" display="flex" justifyContent="end">
        <Box
          zIndex={-1}
          h={containerHeight}
          minH="600px"
          maxW="calc(100vw - (50vw - 690px))"
          flex={1}
          bgImage="url(images/background-pattern-04.png)"
          bgRepeat="no-repeat"
          bgSize={{ base: '1641px 100%', md: '100% 100%' }}
        />
      </Box>
      <Box
        position="absolute"
        h="576px"
        w="calc(50vw - 585px)"
        bgImage="url(images/corner-man-web-asset.png)"
        bgRepeat="no-repeat"
        bgPosition="right"
      />

      <Box w="full">
        <Container
          id="our-process"
          ref={containerRef}
          py={20}
          pb={{ base: 40, md: 28 }}
          maxW={1240}
          centerContent
        >
          <Heading
            textAlign="center"
            fontWeight={800}
            fontSize={['36px', '39px', '42px', '45px', '48px']}
          >
            LEARN
            <Delayed onView={true} from="right" fromOpaque={false}>
              <Text color="white">OUR PROCESS</Text>
            </Delayed>
          </Heading>

          <Stack
            w="100%"
            mt={10}
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'start' }}
            justify="center"
            spacing={{ base: 10, md: 3 }}
          >
            {processList.map((obj, index) => (
              <ProcessBox
                key={'process-' + (index + 1)}
                {...obj}
                index={index}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default OurProcess
