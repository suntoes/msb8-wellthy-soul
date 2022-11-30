import {
  AspectRatio,
  Box,
  Container,
  Image,
  Heading,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

/* Dont change any text above this comment */

// Follow the same format to modify, don't forget the comma and quotes
const title = {
  plain: 'Meet ',
  colored: 'our team'
}

const teamList = [
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  },
  {
    picture: '/images/team/luffy.jpg',
    name: 'Monkey D. Luffy',
    title: '5th emperor'
  }
]

/* Dont change any text below this comment */

const Team = () => (
  <Container
    id="team"
    py={{ base: 20, md: 40 }}
    maxW="container.xl"
    centerContent
  >
    <Heading filter="drop-shadow(0 1px 1px #000000)" mb="1em">
      <Delayed from="down">
        {title.plain}
        <span
          style={{
            color: 'var(--chakra-colors-sun)'
          }}
        >
          {title.colored}
        </span>
      </Delayed>
    </Heading>
    <SimpleGrid w="100%" minChildWidth="140px" spacing={10}>
      {teamList.map(({ picture, name, title }, i) => (
        <Delayed key={'team-' + (i + 1)} from="down" hoverable={true}>
          <Stack key={'team-' + (i + 1)} align="center" spacing="1rem">
            <AspectRatio boxSize={150} ratio={1 / 1}>
              <Image borderRadius="full" alt={name} src={picture} />
            </AspectRatio>
            <Box align="center">
              <Text>{name}</Text>
              <Text>{title}</Text>
            </Box>
          </Stack>
        </Delayed>
      ))}
    </SimpleGrid>
  </Container>
)

export default Team
