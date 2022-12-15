import { useEffect } from 'react'

import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

const Expect = () => {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://embed.typeform.com/next/embed.js"
    script.async = true

    document.body.appendChild(script)
  }, [])

  return (
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
          <Box>
          <Button
            fontSize={[27, 32, 46]}
            variant="gradient-red"
            paddingInline={[5, 6, 12]}
            mb={3}
          >
            Schedule a FREE INTRO call today
          </Button>
          <Heading fontSize={[21, 25, 36]} maxW={840}>
            ...or answer our live form down below:
          </Heading>
          </Box>
        </Stack>
      </Container>
    </Box>

    <div 
      data-tf-widget="pAEdzY96" 
      data-tf-opacity="100" 
      data-tf-iframe-props="title=Wellthy Soul Contact Form- Simple" 
      data-tf-hidden="hubspot_utk=,hubspot_page_name=,hubspot_page_url=" 
      style={{width:"100%", height: "100vh", minHeight: "500px"}}>
    </div>
  </>
  )
}
export default Expect
