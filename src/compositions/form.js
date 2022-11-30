import { useState, useEffect } from 'react'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Container,
  Input,
  Textarea,
  Heading,
  Stack,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react'

import Logo from '../components/logo'
import { sendMail } from '../lib/axios'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [info, setInfo] = useState('')
  const [date, setDate] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const { email: _email, info: _info } = JSON.parse(
      localStorage.getItem('ran-mobile-form') || '{}'
    )
    if (_email && _info) {
      setEmail(_email)
      setInfo(_info)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ran-mobile-form', JSON.stringify({ email, info }))
  }, [email, info])

  const emailHandler = e => setEmail(e.target.value)
  const infoHandler = e => setInfo(e.target.value)
  // honey pot
  const dateHandler = e => setDate(e.target.value)

  const validateInfo = info => info !== '' && info.length >= 2
  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const onSubmit = () => {
    if (!validateEmail(email)) return setError('Invalid Email')
    if (!validateInfo(info)) return setError('Validation failed')

    const callback = res => {
      setLoading(false)
      if (res.status === 400)
        return setError('Something failed, please try again.')
      setInfo('')
      setEmail('')
      setDone(true)
    }

    setError('')
    setLoading(true)
    sendMail({ email, info, date }).then(callback)
  }

  return (
    <Container
      id="contact"
      display="flex"
      flexDirection="column"
      minH={800}
      h="100vh"
      maxW="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={16}>
        <Stack align="center">
          <Logo w={200} />
          <Box filter="drop-shadow(0 1px 0px #000000)" align="center">
            <Heading>
              {done
                ? 'Your message has been successfully sent.'
                : 'Support us?'}
            </Heading>
            <Heading fontSize="1rem" mt={done ? '1rem' : ''}>
              {done ? "we'll try to get back to you ASAP, " : 'or just '}
              <span
                style={{
                  color: 'var(--chakra-colors-sun)'
                }}
              >
                {done ? 'thanks!' : 'want to say hi?'}
              </span>
            </Heading>
          </Box>
        </Stack>
        <Stack
          display={done ? 'none' : 'flex'}
          maxW={400}
          align="center"
          spacing={8}
        >
          <Box>
            {error && (
              <Alert borderTopRadius={5} status="error">
                <AlertIcon />
                <AlertTitle>Oops!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Input
              onChange={dateHandler}
              position="absolute"
              type="text"
              maxW={1}
              transform="translateX(-9999px)"
              pointerEvents="none"
            />
            <Box bg="gradientSun" borderRadius={5} p={1} mb={3}>
              <Input
                type="email"
                placeholder="Your E-mail"
                value={email || ''}
                onChange={emailHandler}
                disabled={loading}
                bg={useColorModeValue('#cccccc', 'black')}
                w="80vw"
                maxW={400}
                borderRadius={5}
                _placeholder={{
                  color: useColorModeValue('black', 'white'),
                  opacity: 0.6
                }}
              />
            </Box>
            <Box bg="gradientSun" borderRadius={5} p={1}>
              <Textarea
                placeholder="Additional Information"
                value={info || ''}
                onChange={infoHandler}
                disabled={loading}
                bg={useColorModeValue('#cccccc', 'black')}
                w="80vw"
                maxW={400}
                minH={280}
                resize="none"
                borderRadius={5}
                _placeholder={{
                  color: useColorModeValue('black', 'white'),
                  opacity: 0.6
                }}
              />
            </Box>
          </Box>
          <Button
            disabled={loading}
            onClick={onSubmit}
            variant="sun"
            transition="all .5ms"
          >
            {loading ? <Spinner /> : 'SUBMIT'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Form
