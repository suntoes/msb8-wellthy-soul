import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'

import Delayed from '../components/delayed'

const Hero = () => (
  <>
    <Box
      w="full"
      minH={{ base: '60vh', '2xl': 0 }}
      bgImage="url(images/background-asset.png)"
      bgRepeat="no-repeat"
      bgPosition="top center"
      bgSize={{ base: '1920px 862px', '2xl': '100%' }}
    >
      <Container py={[30, 35, 50]} maxW={1200} align="center" centerContent>
        <Heading
          maxW={1050}
          fontSize={[36, 42, 60]}
          color="teal"
          fontWeight={700}
        >
          <Delayed>TOGETHER, LETS TRANSFORM YOUR BODY</Delayed>
        </Heading>

        <Box display={{ base: 'none', xl: 'block' }}>
          <Text fontSize={[26]} fontWeight={700} lineHeight={1.75}>
            <Delayed delay={0.2}>
              LOSE THE WEIGHT &nbsp;●&nbsp; IMPROVE YOUR ENERGY &nbsp;●&nbsp;
              REFOCUS ON YOUR NEEDS
            </Delayed>
          </Text>

          <Text fontSize={26} fontWeight={700} lineHeight={1.75}>
            <Delayed delay={0.4}>
              INCREASE MUSCLE TONE &nbsp;●&nbsp; TRANSFORM YOUR MINDSET
            </Delayed>
          </Text>
        </Box>
        <Text
          display={{ base: 'block', xl: 'none' }}
          fontSize={[16, 18, 26]}
          fontWeight={700}
          lineHeight={1.75}
        >
          <Delayed delay={0.2}>
            LOSE THE WEIGHT &nbsp;●&nbsp; IMPROVE YOUR ENERGY &nbsp;●&nbsp;
            REFOCUS ON YOUR NEEDS &nbsp;●&nbsp; INCREASE MUSCLE TONE
            &nbsp;●&nbsp; TRANSFORM YOUR MINDSET
          </Delayed>
        </Text>

        <Delayed from="down" delay={0.6}>
          <Image w="100%" maxW={707} my={4} src="images/hero-vid.png" />
        </Delayed>

        <Delayed from="down" delay={0.8}>
          <Button
            w="100%"
            maxW={707}
            fontSize={[13, 15, 22]}
            lineHeight={1.5}
            mb={4}
            variant="gradient-red"
            paddingInline={3}
          >
            TALK WITH THE WELLTHY SOUL CARE TEAM RIGHT NOW
          </Button>
        </Delayed>
      </Container>
    </Box>
  </>
)

export default Hero
