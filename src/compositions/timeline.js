import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

/* Dont change any text above this comment */

// Icon list can be found at https://react-icons.github.io/react-icons/
import {
  FaRegStickyNote,
  FaLaptopCode,
  FaBullhorn,
  FaRocket,
  FaClipboardList
} from 'react-icons/fa'

// Follow the same format to modify timeline list, don't forget the comma and quotes
const timelineList = [
  {
    date: 'Dec 2022',
    Icon: FaRegStickyNote,
    color: 'red',
    plan: 'Planning & Pre-Production'
  },
  {
    date: 'Jan - Dec 2023',
    Icon: FaLaptopCode,
    color: 'green',
    plan: 'Production'
  },
  {
    date: 'Jan 2024',
    Icon: FaBullhorn,
    color: 'cyan',
    plan: 'Launch'
  },
  {
    date: 'Jul 2024',
    Icon: FaRocket,
    color: 'violet',
    plan: 'Pre-Launch'
  },
  {
    date: 'Jul - Dec 2024',
    Icon: FaClipboardList,
    color: 'yellow',
    plan: 'Testing'
  }
]

const title = {
  plain: 'Development ',
  colored: 'timeline'
}

/* Dont change any text below this comment */

const Timeline = () => (
  <Container
    zIndex={2}
    pt={{ base: 20, md: 40 }}
    maxW="container.xl"
    centerContent
  >
    <Heading
      textAlign={{ base: 'center', md: 'left' }}
      w="100%"
      filter="drop-shadow(0 1px 1px #000000)"
      mb="1em"
    >
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
    <SimpleGrid
      maxW={{ base: 400, md: '100%' }}
      columns={[
        2,
        (timelineList.length / 2) % 1 ? null : timelineList.length / 2,
        timelineList.length
      ]}
      spacing={8}
    >
      {timelineList.map(({ date, Icon, color, plan }, i) => (
        <Delayed key={'plan-' + i} from="down" hoverable={true}>
          <Stack mt={i % 2 ? 20 : 0} w="170" spacing="1rem">
            <Box>
              <Heading
                zIndex={1}
                filter="drop-shadow(0 1px 1px #000000)"
                size="3xl"
              >
                <span
                  style={{
                    color: 'var(--chakra-colors-sun)'
                  }}
                >
                  {`0${i + 1}`}
                </span>
              </Heading>
              <Box
                mt="-10%"
                ml="25%"
                mb="1rem"
                zIndex={0}
                fontSize={[90, null, null, 125]}
                filter={`drop-shadow(0px 0px 3px ${color})`}
              >
                <Icon color={color} />
              </Box>
              <Heading size={['md', null, null, 'lg']}>{plan}</Heading>
              <Text>{date}</Text>
            </Box>
          </Stack>
        </Delayed>
      ))}
    </SimpleGrid>
  </Container>
)

export default Timeline
