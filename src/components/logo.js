import { Image } from '@chakra-ui/react'

const Logo = props => (
  <a href="/">
    <Image w={274} alt="RAN mobile" src={'images/logo.png'} {...props} />
  </a>
)

export default Logo
