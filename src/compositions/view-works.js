import { useState, Fragment } from 'react'

import {
  Box,
  Center,
  Container,
  Divider,
  Image,
  Heading,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import { motion, AnimatePresence } from 'framer-motion'

import Delayed from '../components/delayed'

const workList = [
  {
    title: 'LANDING PAGES',
    works: [
      {
        picSrc: 'images/work.png'
      },
      {
        picSrc: 'images/work-01.png'
      },
      {
        picSrc: 'images/work-02.png'
      },
      {
        picSrc: 'images/work-03.png'
      },
      {
        picSrc: 'images/work-04.png'
      },
      {
        picSrc: 'images/work-05.png'
      }
    ]
  },
  {
    title: 'LEAD GENERATION',
    works: [
      {
        picSrc: 'images/work-05.png'
      },
      {
        picSrc: 'images/work-04.png'
      }
    ]
  },
  {
    title: 'E-COMMERCE',
    works: [
      {
        picSrc: 'images/work-04.png'
      },
      {
        picSrc: 'images/work-05.png'
      },
      {
        picSrc: 'images/work-03.png'
      }
    ]
  },
  {
    title: 'WORDPRESS',
    works: [
      {
        picSrc: 'images/work-02.png'
      },
      {
        picSrc: 'images/work.png'
      }
    ]
  },
  {
    title: 'LOGOS',
    works: [
      {
        picSrc: 'images/work-01.png'
      },
      {
        picSrc: 'images/work-03.png'
      },
      {
        picSrc: 'images/work-04.png'
      }
    ]
  },
  {
    title: 'BANNERS',
    works: [
      {
        picSrc: 'images/work-03.png'
      },
      {
        picSrc: 'images/work-05.png'
      }
    ]
  }
]

const AnimatedWorksGrid = ({ index }) => (
  <AnimatePresence exitBeforeEnter initial={false}>
    <motion.div
      key={'animate-works-' + (index + 1)}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SimpleGrid
        maxW="930px"
        columns={{ base: 2, sm: 3 }}
        mt={5}
        spacing={3}
        mb={-160}
      >
        {workList[index].works.map(({ picSrc }, i) => (
          <Box key={'work-' + (i + 1)}>
            <Image src={picSrc} />
          </Box>
        ))}
      </SimpleGrid>
    </motion.div>
  </AnimatePresence>
)

const ViewWorks = () => {
  const [listIndex, setListIndex] = useState(0)

  return (
    <Box
      overflowX="clip"
      id="our-work"
      transition="all .5ms"
      bgImage="url(images/background-pattern-02a.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="1363px 100%"
      py="20px"
      my="-130px"
      mb="100px"
      w="full"
    >
      <Box
        transition="all .5ms"
        bgImage="url(images/background-pattern-02b.png)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={{ base: '1920px 100%', '2xl': '100% 100%' }}
        w="full"
      >
        <Box
          transition="all .5ms"
          bgImage="url(images/background-pattern-02c.png)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          py="150px"
          w="full"
        >
          <Container maxW="930px" transition="all .5ms" centerContent>
            <Heading
              fontWeight={800}
              fontSize={['36px', '39px', '42px', '45px', '48px']}
            >
              VIEW{' '}
              <Text display="inline-block" color="white">
                OUR WORK
              </Text>
            </Heading>

            <Delayed fromOpaque={false} onView={true}>
              <Stack
                mt={5}
                direction="row"
                bg="darkBlue"
                w="100%"
                px={[3, 4, 6]}
                py={2}
                borderRadius="full"
                justify="space-evenly"
              >
                {workList.map(({ title }, i) => (
                  <Fragment key={'work-tab-' + (i + 1)}>
                    <Heading
                      onClick={() => setListIndex(i)}
                      cursor="pointer"
                      marginBottom="-2 !important"
                      borderBottom={
                        i === listIndex
                          ? { base: '2px solid orange', md: '3px solid orange' }
                          : ''
                      }
                      color="white"
                      fontWeight={500}
                      fontSize={[7, 10, 14, 18, 18]}
                    >
                      {title}
                    </Heading>
                    {i < workList.length - 1 ? (
                      <Center
                        h={[5, 6, 5, 6]}
                        w={['0px', '5px', '8px', '13px']}
                      >
                        <Divider orientation="vertical" />
                      </Center>
                    ) : (
                      <></>
                    )}
                  </Fragment>
                ))}
              </Stack>
            </Delayed>

            <Delayed from="right" fromOpaque={false} onView={true} delay={0.2}>
              <AnimatedWorksGrid index={listIndex} />
            </Delayed>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default ViewWorks
