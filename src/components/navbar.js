import Logo from './logo'
import {
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => (
  <Stack
    py={2}
    direction="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Logo />

    <Stack
      direction={{ base: 'column', lg: 'row' }}
      display={{ base: 'none', lg: 'flex' }}
      width={{ base: 'full', lg: 'auto' }}
      alignItems="center"
      fontWeight={600}
      color="white"
      spacing={12}
      mt={{ base: 4, lg: 0 }}
    >
      <Link href="/#why-bluesky">Why BlueSky</Link>
      <Link href="/#our-work">Our Work</Link>
      <Link href="/#our-process">Our Process</Link>
      <Link href="/#what-clients-say">What Clients Say</Link>
    </Stack>
    <Box display={{ base: 'flex', lg: 'none' }} alignItems="center">
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          bg="#ffffff55"
          variant="solid"
          aria-label="Options"
        />
        <MenuList>
          <Link href="/#why-bluesky">
            <MenuItem>Why BlueSky</MenuItem>
          </Link>
          <Link href="/#our-work">
            <MenuItem>Our Work</MenuItem>
          </Link>
          <Link href="/#our-process">
            <MenuItem>Our Process</MenuItem>
          </Link>
          <Link href="/#what-clients-say">
            <MenuItem>What Clients Say</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Stack>
)

export default Navbar
