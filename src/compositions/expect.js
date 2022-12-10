import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const Expect = () => (
  <>
    <Box w="full" bg="teal" color="white">
      <Container py={[30, 35, 50]} px={[0, 4]} maxW={1240} align="center">
        <Stack spacing={[4, 5, 8]} align="center">
          <Heading fontSize={[32, 42, 60]}>What You Can Expect</Heading>
          <Heading fontSize={[21, 25, 36]} maxW={600}>
            You will LEARN how to live well. Then model that healthy lifestyle
          </Heading>
          <Text fontSize={[16, 18, 26]} maxW={1040}>
            1-on-1 coaching is always our style. Get a personalized plan and
            regular check-ins to help you reach your goals. This is the key and
            our secret sauce to your success. From day 1 we are by your side
            each step of the way through to the finish.
          </Text>
        </Stack>
      </Container>
    </Box>
  </>
)

export default Expect
