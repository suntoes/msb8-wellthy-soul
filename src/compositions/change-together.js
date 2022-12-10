import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const reduceList = [
  `Crave razor-sharp clarity on 'what's next' in your health`,
  'Have no discipline',
  `Miss feeling feminine and 'light'`,
  'Try to get healthy then give up by Wednesday',
  `Don't attend social events because you are embarrassed`,
  'Are tired of buying bigger clothes',
  'Do not know what to eat for your body to lose weight',
  'Lack confidence and motivation',
  'Constantly have negative self talk',
  `Can't complete basic movements like walking or climbing a flight of stairs without labored breathing, sweating or a high heart rate`,
  'Forgot who you once were and want her back',
  'Do not want to be seen naked'
]

const gainList = [
  'Increase your flexibility and gain bodily movement.',
  'Reverse lifestyle disease like diabetes.',
  'Reduce your chances of cardiovascular disease and stroke.'
]

const ChangeTogether = () => (
  <>
    <Box
      w="full"
      bgImage="url(images/background-asset-1.png)"
      bgRepeat="no-repeat"
      bgSize={{ base: '1920px 1803px', '2xl': '100%' }}
      bgPosition="bottom center"
    >
      <Container py={[30, 35, 50]} px={[0, 4]} maxW={1240}>
        <Stack spacing={[12, 14, 20]}>
          <Box bg="light-gray" borderRadius={50} py={[2, 6]} px={[4, 6]}>
            <Heading fontSize={[36, 40, 60]} align="center" mt={[5, 0]} mb={5}>
              If right now you...
            </Heading>

            <SimpleGrid columns={{ base: 2, md: 3 }}>
              {reduceList.map((text, i) => (
                <Delayed delay={i % 3 ? 0.2 : i % 2 ? 0.1 : 0}>
                  <Flex key={'reduce-' + i} direction="row" py={[1, 2, 3]}>
                    <Center h={['24px', '28px', '40px']} ml={3} mr={3}>
                      <Image
                        maxW={['24px', '28px', '40px']}
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

          <Box maxW={800} alignSelf="end" px={4}>
            <Text fontSize={[24, 28, 40]} mb={6}>
              <Delayed from="right">
                Are you modeling negative nutrition and work-life balance to
                your children, friends, or family? Have you forgotten to take
                care of your mind, body and soul?
              </Delayed>
            </Text>

            <Heading fontSize={[36, 42, 60]} color="teal">
              <Delayed from="right">Let's change that together.</Delayed>
            </Heading>
          </Box>
        </Stack>

        <Box maxW={840} mt={[20, 30, 40, 50, 60]} px={4}>
          <Heading fontSize={[42, 49, 70]}>
            <Delayed>Finally Gain the Freedom You Deserve</Delayed>
          </Heading>

          <Stack
            fontSize={[16, 18, 26]}
            fontWeight={700}
            maxW={670}
            spacing={[4, 5, 8]}
            my={[6, 7, 10]}
          >
            {gainList.map((text, i) => (
              <Delayed from="down" delay={i * 0.1}>
                <Flex key={'gain-' + i}>
                  <Text pl={[4, 8, 12, 16]} pr={2}>
                    ●
                  </Text>
                  <Text flex={1}>{text}</Text>
                </Flex>
              </Delayed>
            ))}

            <Text
              maxW={620}
              fontSize={[18, 21, 30]}
              fontWeight={700}
              color="#121317"
            >
              <Delayed from="down">
                <span style={{ color: 'var(--chakra-colors-pink)' }}>
                  Learn why
                </span>{' '}
                so many clients trust us and how we have helped change the lives
                of so many by booking a{' '}
                <span style={{ color: 'var(--chakra-colors-pink)' }}>FREE</span>{' '}
                call with one of your{' '}
                <span style={{ color: 'var(--chakra-colors-pink)' }}>
                  professional weight loss coaches
                </span>{' '}
                today!
              </Delayed>
            </Text>
          </Stack>

          <Delayed>
            <Button
              variant="gradient-red"
              fontSize={[24, 28, 40]}
              paddingInline={12}
              mb={[4, 5, 8]}
            >
              Schedule My FREE Consultation
            </Button>
          </Delayed>
        </Box>
      </Container>
    </Box>
  </>
)

export default ChangeTogether
