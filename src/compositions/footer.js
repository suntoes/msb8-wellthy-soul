import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

const Expect = () => (
  <Box w="full" bg="teal" color="white">
    <Container py={[30, 35, 50]} maxW={1200} align="center">
      <Stack align="center" spacing={[5, 6, 12]}>
        <Heading fontSize={[21, 25, 36]} maxW={840}>
          Finally break your mental roadblock and start taking action to change
          your life TODAY!
        </Heading>
        <Heading fontSize={[21, 25, 36]} maxW={840}>
          What Are You Waiting For?! Book a FREE call with one of our Wellthy
          Soul Care Team today!
        </Heading>
        <Box>
          <a
            href="https://form.typeform.com/to/pAEdzY96?typeform-source=trello.com#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx"
            target="_blank"
          >
            <Button
              fontSize={[27, 32, 46]}
              variant="gradient-red"
              paddingInline={[5, 6, 12]}
              mb={3}
            >
              Schedule a FREE INTRO call today
            </Button>
          </a>
          <Heading fontSize={[21, 25, 36]} maxW={840}>
            ...or answer our live form down below:
          </Heading>
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default Expect
