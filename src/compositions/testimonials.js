import { Box, Container, Image, Flex, Heading, Stack } from '@chakra-ui/react'

import Delayed from '../components/delayed'

const members = [
  {
    name: 'Carmen',
    description: `"It's not all about losing weight? Absolutely not. It’s also about the self-confidence, deeper faith in God’s plan for me, and feeling ready and able for whatever each day brings. I turn 44 in October 2021, and am the healthiest I’ve been since my 20s. I’m a widowed, solo parent, who can confidently keep up with my kiddo and will hopefully be here for her for many years to come. P.S. I take the stairs now."`,
    img: 'images/testimonial.png'
  },
  {
    name: 'Babs',
    description: `"One year and almost 100 pounds down. Now I go into the dressing room and have EVERY SINGLE ITEM FIT."`,
    img: 'images/testimonial-1.png'
  },
  {
    name: 'Samye',
    description: `"I am lighter this holiday season. Not because I have lost 22 pounds but because I no longer get winded walking up the stairs. Emotionally and physically, I am lighter. I am more mindful of my food and portions and even treated myself over Halloween. I can't wait to continue on this program."`,
    img: 'images/testimonial-2.png'
  }
]

const Team = () => (
  <>
    <Box
      w="full"
      mb={5}
      bgImage="images/background-asset-2.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: '1920px 1334px', '2xl': '100%' }}
    >
      <Container py={[30, 35, 50]} maxW={1240} align="center">
        <Heading fontSize={[36, 42, 60]} mb={5}>
          <Delayed from="right">Testimonials</Delayed>
        </Heading>
        <Stack fontSize={[16, 18, 26]}>
          {members.map(({ name, description, img }) => (
            <Box pb={[5, 7, 12]}>
              <Delayed>
                <Flex align="center" maxH={70} mb={-35} zIndex={1}>
                  <Image
                    zIndex={1}
                    border="solid 2px var(--chakra-colors-teal)"
                    boxSizing="border-box"
                    boxSize={70}
                    src={img}
                    borderRadius="full"
                  />
                  <Box
                    align="left"
                    py={1}
                    pl={50}
                    ml={-35}
                    w={220}
                    color="white"
                    bg="teal"
                    borderRadius="full"
                  >
                    {name}
                  </Box>
                </Flex>
                <Box
                  align="left"
                  bg="beige"
                  borderRadius={12}
                  pt={10}
                  pb={[5, 6, 8]}
                  px={[8, 10, 14]}
                >
                  {description}
                </Box>
              </Delayed>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
)

export default Team
