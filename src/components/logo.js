import { Image, Link} from '@chakra-ui/react'

const Logo = props => (
  <Link href="/#">
    <Image
      w={[150, 181, 212, 243, 274]}
      alt="RAN mobile"
      src={'images/logo.png'}
      {...props}
    />
  </Link>
)

export default Logo
