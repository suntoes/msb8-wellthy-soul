import { Box, Heading, Stack } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

/* Dont change any text above this comment */

const Videolink = '/images/official_ran_online_trailer.mp4'

const title = {
  plain: 'Currently ',
  colored: 'under development'
}

// use (` `) for string instead of normal quotation (" ")
const description = `We're still on the rise and our team could use an extra hand. Be a part of our development and help us reach our goal.

Join us in this journey by participating in our online community, working with our team, or sponsoring us.`

/* Dont change any text below this comment */

const Intro = () => (
  <Box
    display="flex"
    flexDirection={{ base: 'column', md: 'row' }}
    alignItems={{ md: 'center' }}
  >
    <Box
      display="flex"
      maxH={360}
      p={1}
      pl={0}
      borderTopRightRadius={25}
      borderBottomRightRadius={25}
      justifyContent="end"
      bg="gradientSun"
      w={{ base: 'calc(100% - 2rem)', md: 'calc(50% - 2rem)' }}
    >
      <video
        loop
        muted
        autoPlay
        preload="auto"
        style={{
          width: '100%',
          objectFit: 'cover',
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25
        }}
      >
        <source src={Videolink} type="video/mp4" />
      </video>
    </Box>
    <Delayed from="right">
      <Stack
        px={{ base: 5, md: 0 }}
        pl={{ md: '2rem' }}
        w={{ md: '100%' }}
        maxW="40rem"
        justify="center"
      >
        <Heading
          filter="drop-shadow(0 1px 1px #000000)"
          mt={{ base: 4, md: 0 }}
          pb={{ base: 1, md: 10 }}
        >
          {title.plain}
          <span
            style={{
              color: 'var(--chakra-colors-sun)'
            }}
          >
            {title.colored}
          </span>
        </Heading>
        <Stack maxW={{ md: '75%' }} my={20}>
          <Paragraph>{description}</Paragraph>
        </Stack>
      </Stack>
    </Delayed>
  </Box>
)

export default Intro
