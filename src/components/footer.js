import { Box, Container, Link, Stack } from '@chakra-ui/react'

import Logo from './logo.js'

const Footer = () => {
  return (
    <Box w="full">
      <Container px={5} py={5} w="100%" maxW="container.xl" centerContent>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing={{ base: 1, md: 16 }}
        >
          <Logo />
          <Stack
            direction="row"
            align="center"
            spacing={{ base: 6, md: 16 }}
            opacity={0.8}
          >
            <Link
              href="https://www.facebook.com/ranmobile.official"
              target="_blank"
            >
              FB Page
            </Link>
            <Link
              href="https://www.facebook.com/groups/ranmobile.official/"
              target="_blank"
            >
              FB Group
            </Link>
            <Link href="/#contact">Email</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
