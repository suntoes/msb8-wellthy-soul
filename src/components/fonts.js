import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    html,
    body {
      /* Safari compatibility */
      overflow-x: hidden;
      height: 100%;
      width: 100%;
      transform: translate3d(0
    }

    @font-face {
      font-family: 'Montserrat';
      font-weight: 700;
      src: url('fonts/Montserrat-Bold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 100;
      font-display: swap;
      src: url('/fonts/Poppins-Thin.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 200;
      font-display: swap;
      src: url('/fonts/Poppins-ExtraLight.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/Poppins-Light.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/Poppins-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/Poppins-Medium.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/Poppins-Bold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 800;
      font-display: swap;
      src: url('/fonts/Poppins-ExtraBold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Poppins';
      font-weight: 900;
      font-display: swap;
      src: url('/fonts/Poppins-Black.ttf') format('truetype');
    }
    `}
  />
)

export default Fonts
