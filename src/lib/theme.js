import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('white', 'black')(props)
    }
  })
}

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`
}

const components = {
  Button: {
    variants: {
      bluesky: {
        display: 'flex',
        minHeight: '74px',
        width: 'fit-content',
        align: 'center',
        border: '4px solid white',
        fontWeight: 700,
        color: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        _hover: {
          opacity: 1
        }
      }
    }
  }
}

const colors = {
  blue: '#0885c3',
  blue2: '#3399cc',
  darkBlue: '#032845',
  orange: '#faa31c',
  yellow: '#fedd00',
  violet: '#6c11b0',
  purple: '#9e5ad1',
  purple2: '#b892ee',
  purple3: '#8561cd',
  red: '#e91358'
}

// These are the default breakpoints
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  // Aside from these for background elements
  '2xl': '1920'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  breakpoints,
  config,
  components,
  styles,
  colors,
  fonts
})
export default theme
