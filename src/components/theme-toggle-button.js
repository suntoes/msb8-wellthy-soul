import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  Stack,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Box
        transform="scale(0.8)"
        bg="sun"
        display="flex"
        alignItems="center"
        justifyContent={useColorModeValue('start', 'end')}
        borderRadius="full"
        w={16}
        onClick={toggleColorMode}
      >
        <Stack
          px={2}
          color="black"
          fontSize={15}
          w={16}
          justify="space-between"
          direction="row"
          position="absolute"
        >
          <SunIcon />
          <MoonIcon />
        </Stack>

        <motion.div transition={spring} layout>
          <IconButton
            transform="scale(0.7)"
            backgroundColor="white"
            borderRadius="full"
            aria-label="Toggle theme"
            _hover={{ opacity: 1 }}
          />
        </motion.div>
      </Box>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
