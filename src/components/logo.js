import { Image, Heading } from '@chakra-ui/react'

const Logo = props => (
  <a href="/">
    <Image
      w={[150, 181, 212, 243, 274]}
      alt="RAN mobile"
      src={'images/logo.png'}
      {...props}
    />

    <Heading position="absolute" display={{ base: 'block', sm: 'none' }}>
      base
    </Heading>
    <Heading
      position="absolute"
      display={{ base: 'none', sm: 'block', md: 'none' }}
    >
      sm
    </Heading>
    <Heading
      position="absolute"
      display={{ base: 'none', md: 'block', lg: 'none' }}
    >
      md
    </Heading>
    <Heading
      position="absolute"
      display={{ base: 'none', lg: 'block', xl: 'none' }}
    >
      lg
    </Heading>
    <Heading position="absolute" display={{ base: 'none', xl: 'block' }}>
      xl
    </Heading>
  </a>
)

export default Logo
