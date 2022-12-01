import { Box, Text, Flex } from '@chakra-ui/react'

import Delayed from './delayed'

const AbstractTab = ({ title, index }) => {
  const isOdd = index % 2

  const borderRadiusList = [
    ['25px', '30px', null, null],
    ['30px', null, '25px', null],
    ['30px', null, '25px', null],
    [null, null, '30px', '25px'],
    [null, null, '25px', '30px'],
    [null, '30px', null, '25px'],
    [null, '30px', null, '25px'],
    ['25px', '30px', null, null]
  ]
  const getBorderRadiusProps = () => {
    const _index =
      index + 1 > borderRadiusList.length
        ? index -
          Math.ceil(borderRadiusList.length / index) * borderRadiusList.length
        : index
    const radiusSet = borderRadiusList[_index]

    console.log(title, radiusSet, _index)
    return {
      borderTopLeftRadius: radiusSet[0],
      borderTopRightRadius: radiusSet[1],
      borderBottomLeftRadius: radiusSet[2],
      borderBottomRightRadius: radiusSet[3]
    }
  }

  const color = // check if index color should be blue
    (isOdd ? ((index - 1) / 2) % 2 : (index / 2) % 2) ? 'blue' : 'purple'
  const boxSize = color === 'blue' ? [15, 30] : [10, 20]
  const flexDirection = index % 2 ? 'row-reverse' : 'row'
  const ml = index % 2 ? boxSize.map(n => -n) : null
  const mr = index % 2 ? null :  boxSize.map(n => -n)

  const stickLengthList = [
    '60%',  '60%',
    '40%',  '40%',
    '100%', '100%',
    '75%', '75%'
  ]
  const getStickLength = () => {
    const _index =
      index + 1 > borderRadiusList.length
        ? index -
          Math.ceil(borderRadiusList.length / index) * borderRadiusList.length
        : index
    return stickLengthList[_index]
  }

  return (
    <Flex direction={flexDirection}>
      <Box
        flex={1}
        display="flex"
        flexDirection={flexDirection}
        alignItems="center"
      >
        <Delayed 
          from={flexDirection === "row" ? "right" : "left"}
          onView={true}
          fromOpaque={false}
          style={{ zIndex: 1, width: '100%' }}
        >
          <Box
            display="flex"
            flexDirection={flexDirection}
            alignItems="center"
            justifyContent={flexDirection === "row" ? "end" : "start"}
          >
            <Box
              ml={ml ? {base: ml[0]+"px", md: ml[1]+"px"} : null}
              mr={mr ? {base: mr[0]+"px", md: mr[1]+"px"} : null}
              bg={color}
              boxSize={{base: boxSize[0]+"px", md: boxSize[1]+"px"}}
              borderRadius="full"
            />
            <Box bg={color} h={{base: "7px", md: "10px"}} w={getStickLength()} />
          </Box>
        </Delayed>
      </Box>
      <Box
        zIndex={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={3}
        w={{base: "80%", md: "70%"}}
        bg={color}
        {...getBorderRadiusProps()}
      >
        <Text textAlign="center" color="white" fontWeight={700} fontSize={[14, 20, 22, 25, 27]}>
          {title}
        </Text>
      </Box>
    </Flex>
  )
}

export default AbstractTab
