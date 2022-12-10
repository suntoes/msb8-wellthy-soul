import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('white', 'black')(props),
      letterSpacing: '.1rem'
    }
  })
}

const fonts = {
  heading: `'MinionPro', sans-serif`,
  body: `'MinionPro', sans-serif`
}

const components = {
  Button: {
    variants: {
      'gradient-red': {
        background: 'gradient-red',
        display: 'flex',
        h: '100%',
        minHeight: '68px',
        width: 'fit-content',
        align: 'center',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: 'white',
        paddingX: 6,
        borderRadius: 12,
        whiteSpace: 'normal',
        overflow: 'hidden',
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        _hover: {
          opacity: 0.8
        }
      }
    }
  }
}

const colors = {
  teal: '#125863',
  pink: '#ec008c',
  beige: '#c8b7b1',
  'dark-beige': '#3d3d3d',
  'light-gray': '#e7e6e4',
  'gradient-red': 'linear-gradient(to right, #e03e52, #ee7486)'
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
