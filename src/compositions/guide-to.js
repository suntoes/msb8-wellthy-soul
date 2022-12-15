import { useRef, useEffect, useState } from 'react'

import {
  Box,
  Button,
  Container,
  Image,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const guideToList = [
  'A whole body approach to wellness considering the mind, body and soul',
  'Safe fitness designed for your goals and your fitness level',
  "Nutrition tailored to your body's current needs",
  'Improved confidence and positive self-talk',
  'Finally have razor-sharp clarity about your daily goals',
  'Live with intention and peace',
  "Become the version of yourself you've always wanted to be",
  "Finally comprehend that achieving your goals isn't selfish. It's the most selfless thing you can do for your family, friends, and the world",
  'Eat food that nourishes your body and food that your family will actually eat too!',
  'Spend time and energy on YOU',
  'Take 10 minutes each day to set daily goals and celebrate wins from yesterday',
  "Say 'adios' to limiting beliefs. Byeee",
  'Spend at least 60 minutes a week focused on an activity that calms your mind, body and soul',
  'Structure your calender to prioritize YOUR mental and physical health',
  'Workout consistently',
  'Connect with other like-minded women who run businesses and households and who want the next 12 months to be full of growth and joy'
]

const GuideTo = () => {
  const [boxSize, setBoxSize] = useState({ height: 0, width: 0 })
  const boxRef = useRef()

  const handleResize = () => {
    clearTimeout(localStorage.getItem('bg-height-timer'))
    const timer = setTimeout(() => {
      let newHeight
      let newWidth

      if (window.innerWidth < 1100) {
        newHeight = 0
        newWidth = 0
      } else if (boxRef) {
        newHeight = boxRef.current.clientHeight
        newWidth = boxRef.current.clientWidth
      }

      setBoxSize({ height: newHeight, width: newWidth })
    })
    localStorage.setItem('bg-height-timer', timer)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Box
        ref={boxRef}
        bg="linear-gradient(to bottom, var(--chakra-colors-light-gray) 80%, #ffffff00)"
        w="full"
        py={[30, 35, 50]}
      >
        <Delayed from="down" style={{ pointerEvents: 'none' }}>
          <Box
            display="flex"
            position="absolute"
            height={boxSize.height}
            width={boxSize.width}
            justifyContent="center"
            alignItems="end"
            pointerEvents="none"
          >
            <Image
              src="images/web-asset-3.png"
              maxH={1650}
              transform="translateX(65%) translateY(-10%)"
              pointerEvents="none"
            />
          </Box>
        </Delayed>
        <Container maxW={1240} py={[30, 35, 50]}>
          <Heading w="full" fontSize={[42, 49, 70]} mb={[6, 7, 10]}>
            <Delayed from="right">
              Allow Wellthy Soul to guide you to...
            </Delayed>
          </Heading>
          <Stack
            bg="white"
            maxW={840}
            px={5}
            py={10}
            spacing={[4, 5, 8]}
            borderRadius={12}
            boxShadow="0 0 15px #00000022"
          >
            {guideToList.map((text, i) => (
              <Delayed>
                <Flex zIndex={1} key={'guide-to-' + i} maxW={700}>
                  <Box boxSize={31} mt={2} mx={[1, 2, 5]}>
                    <Image minW={31} src="images/check-icon.png" />
                  </Box>
                  <Text
                    fontSize={[16, 18, 26]}
                    fontWeight={700}
                    align="left"
                    pl={[3, 2, 1]}
                  >
                    {text}
                  </Text>
                </Flex>
              </Delayed>
            ))}
          </Stack>
          <Delayed from="down">
            <a
              href="https://form.typeform.com/to/pAEdzY96?typeform-source=trello.com#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx"
              target="_blank"
            >
              <Button
                fontSize={[18, 21, 30]}
                variant="gradient-red"
                paddingInline={5}
                mt={7}
              >
                YES, I'M READY TO TRANSFORM MY WELLNESS!
              </Button>
            </a>
          </Delayed>
        </Container>
      </Box>
    </>
  )
}

export default GuideTo
