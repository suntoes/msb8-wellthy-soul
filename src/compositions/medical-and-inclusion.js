import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'

import Delayed from '../components/delayed'

const inclusion = [
  {
    title: 'Advanced Application',
    description:
      'You will download our app that syncs with your wearable device. That data syncs into our app and we will be checking on you at 8am, 1pm and 5pm daily. With real-time questions and updates, our team is tracking your progress moment by moment'
  },
  {
    title: 'Medical Checkups',
    description:
      'You will meet with Dr. Sanchez to review your bloodwork and urinalysis. In that meeting, she will suggest supplementation if needed.'
  },
  {
    title: 'Private Coaching',
    description:
      'You will also receive 4 private coaching sessions over the first 8 weeks. Those sessions will always be led by your Personal Health Advisor who could be joined by Layne, your dietician or another provider who will help you get closer to your goals.'
  },
  {
    title: 'Weekly Goat Planning',
    description:
      'Every Monday at 11am CST, Layne leads the weekly goal setting mastermind with all active clients. You will set your goals for the week and receive weekly education.'
  },
  {
    title: 'Clinical Dietician Education',
    description:
      'Every Friday at 11am CST, our Clinical Dietician leads the weekly nutrition mastermind with all active clients. You will receive 15-20 minutes of nutrition education then ask questions about your meal plan.'
  }
]

const MedicalAndInclusion = () => (
  <>
    <Box
      w="full"
      bg="linear-gradient(to top, var(--chakra-colors-light-gray) 80%, #ffffff00)"
    >
      <Container
        mb={[0, 5, 20]}
        py={[30, 35, 50]}
        maxW={1240}
        align="center"
        centerContent
      >
        <Delayed from="down-ccw" fromOpaque={false} hoverable={true}>
          <Image w="full" maxW={940} src="images/medical-team.png" />
        </Delayed>

        <Heading fontSize={[21, 25, 36]} my={2}>
          <Delayed>OUR MEDICAL TEAM</Delayed>
        </Heading>

        <Text fontSize={[16, 18, 26]} maxW={640} align="center">
          <Delayed>
            Functional Medicine doctors focused on vitamin and mineral
            supplementation as well as Nurse Practitioner focused on hormone
            repair
          </Delayed>
        </Text>

        <Delayed from="right">
          <Image
            w="full"
            maxW={[130, 150, 225]}
            src="images/company-logo.png"
            mt={10}
            mb={2}
          />
        </Delayed>
        <Heading fontSize={[36, 42, 60]}>
          <Delayed from="right">WELLTHY SOUL CARE TEAM</Delayed>
        </Heading>
        <Text fontSize={[16, 18, 26]} align="center">
          <Delayed from="down">YOUR PERSONAL WELLNESS ADVISORS</Delayed>
        </Text>
        <Text fontSize={[16, 18, 26]} maxW={640} align="center" my={6}>
          <Delayed from="down">
            I stand by my word and will help you cross the finish line and
            completely transform your body to achieve the results you deserve!
          </Delayed>
        </Text>
      </Container>

      <Container pointerEvents="none" maxW={1100} h={127} mb={-127}>
        <Stack
          transform="translateY(-25%)"
          direction="row"
          justify="space-between"
        >
          <Image
            transform={['translateX(-25%)', 'translateX(0%)']}
            src="images/web-asset-4b.png"
          />
          <Image
            transform={['translateX(25%)', 'translateX(0%)']}
            src="images/web-asset-4c.png"
          />
        </Stack>
      </Container>
      <Container
        px={[10, 50, 100]}
        pt={[30, 35, 50]}
        pb={[170, 180, 200]}
        maxW={1100}
        bgImage="images/web-asset-4a.png"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="100% 100%"
      >
        <Heading fontSize={[36, 42, 60]} align="center">
          What Else is Included?
        </Heading>

        <Stack mt={[6, 7, 10]} spacing={[6, 7, 10]}>
          {inclusion.map(({ title, description }, i) => (
            <Flex fontSize={[16, 18, 26]}>
              <Text fontWeight={700} mx={[1, 2, 5]}>
                ●
              </Text>
              <Text flex={1} pr={i === inclusion.length - 1 ? 10 : 0}>
                <strong>{title}:</strong> {description}
              </Text>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
)

export default MedicalAndInclusion
