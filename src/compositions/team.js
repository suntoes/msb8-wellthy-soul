import {
  Box,
  Container,
  Image,
  Heading,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const founder = {
  name: 'Layne Bruner',
  title: 'FOUNDER',
  img: 'images/team.png'
}

const members = [
  {
    name: 'Emma Aguirre',
    title: 'PERSONAL HEALTH ADVISOR',
    img: 'images/team-1.png'
  },
  {
    name: 'Luz Helena Wayman',
    title: 'CLIENT CONSCIERGE',
    img: 'images/team-2.png'
  },
  {
    name: 'Emily Parker',
    title: 'REGISTERED DIETICIAN',
    img: 'images/team-3.png'
  }
]

const Team = () => (
  <>
    <Box
      w="full"
      bgImage="images/background-asset-2.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: '1920px 1334px', '2xl': '100%' }}
    >
      <Container py={[30, 35, 50]} maxW={1240} align="center">
        <Heading fontSize={[42, 49, 70]} mb={[1, 2, 5]}>
          <Delayed from="right">MEET THE TEAM</Delayed>
        </Heading>

        <Delayed from="down" fromOpaque={false} hoverable={true}>
          <Stack align="center" my={2}>
            <Image
              maxW={[220, 260, 303]}
              src={founder.img}
              bg="linear-gradient(to top, var(--chakra-colors-teal) 0% 70%, #ffffff00 70%)"
            />
            <Heading fontSize={36}>{founder.name}</Heading>
            <Text fontSize={18} color="teal">
              FOUNDER
            </Text>
          </Stack>
        </Delayed>

        <SimpleGrid columns={members.length} minChildWidth={240}>
          {members.map(({ name, title, img }, i) => (
            <Delayed
              from="down"
              fromOpaque={false}
              delay={0.1 * i}
              hoverable={true}
            >
              <Stack key={'member-' + i} align="center" mt={[6, 7, 10]}>
                <Image
                  h={[250, 270, 325]}
                  w="auto"
                  src={img}
                  bg="linear-gradient(to top, var(--chakra-colors-teal) 0% 70%, #ffffff00 70%)"
                />
                <Heading fontSize={36}>{name}</Heading>
                <Text fontSize={18} color="teal">
                  {title}
                </Text>
              </Stack>
            </Delayed>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  </>
)

export default Team
