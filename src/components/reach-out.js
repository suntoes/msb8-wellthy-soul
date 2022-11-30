import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Reachout = props => (
  <Box
    w="full"
    zIndex={1}
    position="absolute"
    transform="translateY(100vh) translateY(-100%)"
    {...props}
  >
    <Link
      href="https://www.youtube.com/watch?v=6gZIukuSSLc&ab_channel=MMOBomb"
      target="_blank"
      ml={4}
      fontSize="1rem"
      color="white"
      opacity={0.6}
    >
      *Official Trailer of RAN Online
    </Link>
    <Box
      p={4}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Stack direction="row" align="center" justify="center" spacing={5}>
        <a
          href="https://www.facebook.com/ranmobile.official"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="sun" color="white" bg="#4267B2" pr={12} minW="11rem">
            FOLLOW US ON
            <Text
              transform={'translateY(-25%) translateX(50%)'}
              position="absolute"
              fontSize={70}
              display="inline-block"
            >
              f
            </Text>
          </Button>
        </a>
        {/*
      <Text>OR</Text>
      <Stack direction="row">
        <Input
          placeholder="your@email.com"
          h={42}
          w={250}
          borderColor="sun"
          borderWidth={3}
          display="inline-block"
          _placeholder={{
            color: useColorModeValue('black', 'white'),
            opacity: 0.6
          }}
        />
        <Button variant="sun" bg="gradientSun">
          SUBSCRIBE
        </Button>
      </Stack>
      <Text>FOR UPDATES</Text>
      */}
        <Text>FOR UPDATES AND ANNOUNCEMENTS!</Text>
      </Stack>
    </Box>
  </Box>
)

export default Reachout
