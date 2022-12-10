import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const pictures = [
  'images/web-asset-a.png',
  'images/web-asset-b.png',
  'images/web-asset-c.png',
  'images/web-asset-d.png',
  'images/web-asset-e.png',
  'images/web-asset-f.png'
]

const SuccessRate = () => (
  <>
    <Box w="full">
      <Container py={[30, 35, 50]} maxW={1200} align="center" centerContent>
        <Heading
          maxW={900}
          fontSize={[21, 25, 36]}
          fontWeight={700}
          color="#292929"
          lineHeight={1.5}
        >
          <Delayed from="right">
            OUR SUCCESS RATE FOR FULL WELLNESS TRANSFORMATION IS SECOND TO NONE
          </Delayed>
        </Heading>

        <SimpleGrid
          columns={[Math.round(pictures.length / 2), pictures.length]}
          my={[9, 11, 16]}
        >
          {pictures.map((src, i) => (
            <Delayed
              key={'showcase-' + i}
              from={i % 2 ? 'down-cw' : 'down-ccw'}
              fromOpaque={false}
              delay={i * 0.1}
              hoverable={true}
            >
              <Image
                src={src}
                transform="scale(1.1)"
                zIndex={pictures.length - i}
                filter="drop-shadow(0 5px 5px #00000055)"
              />
            </Delayed>
          ))}
        </SimpleGrid>

        <Delayed hoverable={true}>
          <Center maxW={707} bg="teal" color="white" p={25} borderRadius={12}>
            <Heading fontSize={[29, 34, 49]}>
              TAKE ACTION & RESHAPE YOUR BODY TODAY!
            </Heading>
          </Center>
          <Center maxW={707}>
            <Box
              bg="teal"
              boxSize={55}
              zIndex={-1}
              transform="translateY(-55%) rotate(45deg) scale(1.1)"
            />
          </Center>
        </Delayed>

        <Delayed>
          <Button
            maxW={707}
            fontSize={[24, 28, 40]}
            mb={4}
            variant="gradient-red"
            paddingInline={12}
          >
            Schedule My FREE Consultation
          </Button>
        </Delayed>
      </Container>
    </Box>
  </>
)

export default SuccessRate
