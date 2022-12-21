import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'

import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css'

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

        <Box maxW={['full', 505, 707]}>
          <Delayed from="down" delay={0.6}>
            <Box w="1000px" maxW={'full'} my={4}>
              <Player
                poster="images/hero-vid.png"
                src="videos/wellthy-soul-executive-long.mp4"
              >
                <BigPlayButton disabled />
              </Player>
            </Box>
          </Delayed>
        </Box>

        <Delayed from="down" delay={0.8}>
          <a
            href="https://form.typeform.com/to/pAEdzY96?typeform-source=trello.com#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx"
            target="_blank"
          >
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
          </a>
        </Delayed>
      </Container>
    </Box>
  </>
)

export default Hero
