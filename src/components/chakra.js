import {
  ChakraProvider,
  ColorModeScript,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

const Chakra = ({ children }) => (
  <ChakraProvider
    theme={theme}
    colorModeManager={localStorageManager}
    cssVarsRoot="body"
  >
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {children}
  </ChakraProvider>
)

export default Chakra
