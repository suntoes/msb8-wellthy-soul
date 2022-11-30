import { Box, Container, Image, Heading, Stack } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

/* Dont change any text above this comment */

const title = {
  plain: 'The limitless world of RAN Online will  ',
  colored: 'soon land on your mobile'
}

// use (` `) for string instead of normal quotation (" ")
const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s.`

/* Dont change any text below this comment */

const Intro = () => (
  <Container
    id="about"
    pt={{ base: 20, md: 0 }}
    pb={0}
    maxH={925}
    maxW="container.xl"
  >
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={0}
      align="center"
      justify="space-between"
    >
      <Box zIndex={1} w={{ md: '130%' }}>
        <Delayed>
          <Heading filter="drop-shadow(0 1px 1px #000000)">
            {title.plain}
            <span
              style={{
                color: 'var(--chakra-colors-sun)'
              }}
            >
              {title.colored}
            </span>
          </Heading>
          <Stack
            maxW={{ base: '50%', md: '70%' }}
            my={{ base: 10, md: 20 }}
            spacing={5}
          >
            <Paragraph>{description}</Paragraph>
          </Stack>
        </Delayed>
      </Box>
      <Box
        overflowY={{ md: 'clip' }}
        maxH={{ base: 100, sm: 150, md: 900 }}
        transform={{
          base: 'translateY(-250%) translateX(30%) scale(0.5)',
          md: 'translateY(1%) scale(1)'
        }}
      >
        <motion.div
          animate={{ y: 50 }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            duration: 4
          }}
        >
          <Image
            alt="RAN mobile showcase"
            src="images/mobile-2.png"
            transform="translateY(50%) translateX(-25%) scale(0.8)"
          />
        </motion.div>
        <motion.div
          animate={{ y: 100 }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            duration: 4,
            delay: 1
          }}
        >
          <Image
            alt="RAN mobile showcase"
            src="images/mobile-1.png"
            transform="translateY(-80%) scale(0.8)"
          />
        </motion.div>
      </Box>
    </Stack>
  </Container>
)

export default Intro
