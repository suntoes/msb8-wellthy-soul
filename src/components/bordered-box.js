import { Container, Link, useColorModeValue } from '@chakra-ui/react'

const BorderedBox = ({ children }) => (
  <Container
    display="flex"
    flexDirection={{ base: 'column-reverse', md: 'row' }}
    background="gradientSun"
    maxW="100vw"
    p={1}
  >
    <Link
      position="absolute"
      href="https://www.deviantart.com/adipatijulian/art/Ran-Online-31955656"
      target="_blank"
      ml={4}
      opacity={0.4}
      alignSelf="end"
    >
      *Fan art of RAN Online by adipatijulian
    </Link>

    <Container
      p={0}
      bg={useColorModeValue('white', 'maroon')}
      bgImage={useColorModeValue(
        'url("images/ran_online_by_adipatijulian_1.png")',
        'url("images/ran_online_by_adipatijulian_2.png")'
      )}
      bgSize={['contain', null, null, null, '1280px']}
      bgRepeat="no-repeat"
      bgPosition="right bottom"
      maxW="100vw"
    >
      {children}
    </Container>
  </Container>
)

export default BorderedBox
