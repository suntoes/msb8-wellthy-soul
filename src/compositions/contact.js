import {
  Box,
  Button,
  Container,
  Input,
  Heading,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'

const StyledInput = props => (
  <Input
    h="48px"
    fontSize={{ base: 18, md: 24 }}
    bg="white"
    borderRadius="10px"
    outline="none"
    _placeholder={{ color: 'black' }}
    {...props}
  />
)

const Contact = () => {
  return (
    <Box
      overflowX="clip"
      w="full"
      mt="-110px"
      pt="120px"
      bgImage="url(images/background-pattern-05.png)"
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize={{ base: '1920px 100%', '2xl': '100% 100%' }}
    >
      <Container maxW={970} centerContent>
        <Box w="full" maxW={830}>
          <Heading fontSize={['38px', '50px', '54px', '58px', '60px']}>
            CONTACT{' '}
            <Text
              display="inline-block"
              color="white"
              fontSize={['36px', '39px', '42px', '45px', '48px']}
            >
              US TODAY!
            </Text>
          </Heading>
        </Box>
        <Box
          bg="yellow"
          mt={8}
          mb={14}
          py={[10, 5, 14]}
          px={[10, 8, 20]}
          boxShadow="15px 15px #00000099"
        >
          <Stack direction={{ base: 'column', md: 'row' }} spacing={[2, 4, 8]}>
            <StyledInput placeholder="Full Name" />
            <StyledInput placeholder="Email Address" />
          </Stack>
          <Stack
            mt={2}
            direction={{ base: 'column', md: 'row' }}
            spacing={[2, 4, 8]}
          >
            <StyledInput placeholder="Phone Number" />
            <StyledInput placeholder="Company" />
          </Stack>
          <Textarea
            placeholder="Message"
            fontSize={{ base: 18, md: 24 }}
            mt={2}
            py={2}
            px={4}
            bg="white"
            minH={156}
            borderRadius="10px"
            outline="none"
            _placeholder={{ color: 'black' }}
          />
          <Button
            h={45}
            mt={2}
            bg="red"
            borderRadius="10px"
            w="full"
            fontSize={30}
            fontWeight={700}
            color="white"
            _hover={{
              background: 'red',
              opacity: 0.5
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
      <Box w="full" bg="purple3">
        <Container px={0} maxW="1920px">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            color="white"
            minH={55}
            py={2}
            fontSize={14}
            align="center"
            justify="space-evenly"
            spacing={0}
          >
            <Text>Copyright © Blueskyroi.com | All rights reserved</Text>
            <Text>Terms and Conditions | Privacy Policy</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
