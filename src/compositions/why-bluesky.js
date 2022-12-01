import { Box, Container, Image, Heading, Stack, Text } from '@chakra-ui/react'

import Delayed from '../components/delayed'

const DelayedImage = ({ src }) => (
  <Delayed from="down" onView={true} hoverable={true} fromOpaque={false}>
    <Image filter="drop-shadow(2px 5px 10px #00000077)" src={src} />
  </Delayed>
)

const WhyBluesky = () => (
  <>
    <Box 
      bgImage="url(images/background-asset.png)"
      bgPosition={{base: "center", xl: "right"}}
      bgRepeat="no-repeat"
      w="full" 
      pt={[20, 20, 20, 20, 1]} 
      pb={40}
    >
      <Container maxW="930px" centerContent>
        <Stack direction={{base: "column", md: "row"}} spacing={8} mb={{base: 8, md: 16}}>
          <Box display="flex" w={{base: "70%",md: "full"}} h={[250, 400, 470]} justify="space-between">
            <Box zIndex={2} alignSelf="start" w="40%">
              <DelayedImage src="images/work-sample.png" />
            </Box>
            <Box zIndex={1} alignSelf="center" mx="-10%" w="40%">
              <DelayedImage src="images/work-sample-01.png" />
            </Box>
            <Box alignSelf="end" w="40%">
              <DelayedImage src="images/work-sample-02.png" />
            </Box>
          </Box>
          <Box w="full" fontSize={{base: 18, md: 24}}>
            <Heading
              fontWeight={800}
              maxW="full"
              fontSize={['36px', '39px', '42px', '45px', '48px']}
              mb="2rem"
            >
              WHY CHOOSE
              <Delayed from="right" fromOpaque={false} onView={true}>
                <Text color="blue" transform="translateX(5%)">BLUESKY DESIGN?</Text>
              </Delayed>
            </Heading>
            Becase the performance of your marketing creative will determine the
            success of your product of service. With over 15 years of digital
            direct response expertise, BlueSky Media is recognized as one of the
            top marketing design agencies in the industry.
          </Box>
        </Stack>
         <Stack direction={{base: "column", md: "row-reverse"}} zIndex={1} spacing={8}>
          <Box display="flex" w={{base: '70%', md: "full"}} h={[250, 400, 470]} alignSelf="end" justify="space-between">
            <Box zIndex={2} alignSelf="start" w="40%">
              <DelayedImage src="images/work-sample.png" />
            </Box>
            <Box zIndex={1} alignSelf="center" mx="-10%" w="40%">
              <DelayedImage src="images/work-sample-01.png" />
            </Box>
            <Box alignSelf="end" w="40%">
              <DelayedImage src="images/work-sample-02.png" />
            </Box>
          </Box>
          <Box w="full" fontSize={{base: 18, md: 24}}>
            <Delayed onView={true} fromOpaque={false}>
            The first impression is always the most important. Capture the
            attention of your prospects with exciting creative and enticing copy.
            Lure your potential customers to visit your web property and then
            give them a reason to stay when they land. Walking your customers
            through this smooth and seemingly effortless process is crucial to
            </Delayed>
         </Box>
        </Stack>
      </Container>
    </Box>
  </>
)

export default WhyBluesky
