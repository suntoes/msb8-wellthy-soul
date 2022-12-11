import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const pictures = [
  {
    src: 'images/web-asset-1a.png',
    rotate: -10,
    zIndex: 0
  },
  {
    src: 'images/web-asset-1b.png',
    rotate: 10,
    zIndex: 1
  },
  {
    src: 'images/web-asset-1c.png',
    rotate: -5,
    zIndex: 0
  }
]

const reduceList = [
  'Heart Disease',
  'High Blood Pressure',
  'Stroke',
  'High Cholesterol',
  'Type-2 Diabetes',
  'Metabolic Disease',
  'Cancer',
  'Insulin Resistance'
]

const CustomApproach = () => (
  <>
    <Box w="full" bg="light-gray">
      <Container py={50} maxW={1240} centerContent>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'start' }}
        >
          <SimpleGrid
            flex={1}
            columns={{ base: pictures.length, md: 1 }}
            align="center"
          >
            {pictures.map(({ src, rotate, zIndex }, i) => (
              <Center key={'showcase-1-' + i}>
                <Delayed
                  from={i % 2 ? 'down-cw' : 'down-ccw'}
                  fromOpaque={false}
                  delay={i * 0.1}
                  hoverable={true}
                >
                  <Image
                    my={-5}
                    src={src}
                    zIndex={zIndex}
                    filter="drop-shadow(0 5px 5px #00000055)"
                    transform={`rotate(${rotate}deg)`}
                  />
                </Delayed>
              </Center>
            ))}
          </SimpleGrid>

          <Box flex={1}>
            <Text
              fontSize={[20, 24, 34]}
              fontWeight={700}
              pb={[21, 24, 35]}
              pt={{ base: 35, md: 0 }}
            >
              <Delayed from="up">
                At Wellthy Soul, we help with a full mind, body, soul
                transformation for those who feel like they need expert personal
                care and someone guiding them each day, every week.
              </Delayed>
            </Text>

            <Heading fontSize={[30, 35, 50]}>
              <Delayed>Do you feel like you need a custom approach?</Delayed>
            </Heading>

            <Text fontSize={[14, 17, 24]} my={6}>
              <Delayed from="right" style={{ display: 'inline-block' }}>
                It is not an easy task when so many people depend on you all day
                every day! Whether you run a business or manage a household you
                are the very last person or thing that gets the care and
                attention you deserve. Your physical body shows it and your
                mindset and soul feel the lack of attention. It’s been too long
                since you felt like you did at your peak. The time for change is
                NOW!
              </Delayed>
              <br></br>
              <br></br>
              <strong>
                <Delayed from="down" style={{ display: 'inline-block' }}>
                  Live a longer, happier life and take steps to reduce:
                </Delayed>
              </strong>
            </Text>

            <SimpleGrid columns={2}>
              {reduceList.sort((a, b) => a.length - b.length).map((text, i) => (
                <Delayed from="down" delay={i % 2 ? 0.2 : 0}>
                  <Flex key={'reduce-' + i} direction="row" py={[1, 2, 3]}>
                    <Center h={['26px', '28px', '40px']} ml={3} mr={3}>
                      <Image
                        maxW={['26px', '28px', '40px']}
                        src={'images/cross-icon.png'}
                      />
                    </Center>

                    <Text flex={1} fontSize={[14, 17, 24]} fontWeight={700}>
                      {text}
                    </Text>
                  </Flex>
                </Delayed>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  </>
)

export default CustomApproach
