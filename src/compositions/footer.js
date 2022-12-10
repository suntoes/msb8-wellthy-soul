import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

const Expect = () => (
  <>
    <Box w="full" bg="teal" color="white">
      <Container py={[30, 35, 50]} maxW={1200} align="center">
        <Stack align="center" spacing={[5, 6, 12]}>
          <Heading fontSize={[21, 25, 36]} maxW={840}>
            Finally break your mental roadblock and start taking action to
            change your life TODAY!
          </Heading>
          <Heading fontSize={[21, 25, 36]} maxW={840}>
            What Are You Waiting For?! Book a FREE call with one of our Wellthy
            Soul Care Team today!
          </Heading>
          <Button
            fontSize={[27, 32, 46]}
            variant="gradient-red"
            paddingInline={[5, 6, 12]}
          >
            Schedule a FREE INTRO call today
          </Button>
        </Stack>
      </Container>
    </Box>
  </>
)

export default Expect
