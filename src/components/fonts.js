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
      transform: translate3d(0,0,0);
    }

    @font-face {
      font-family: 'MinionPro';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/MinionPro-Regular.otf') format('opentype');
    }
    @font-face {
      font-family: 'MinionPro';
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/MinionPro-Medium.otf') format('opentype');
    }
    @font-face {
      font-family: 'MinionPro';
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/MinionPro-Semibold.otf') format('opentype');
    }
    @font-face {
      font-family: 'MinionPro';
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/MinionPro-Bold.otf') format('opentype');
    }
    @font-face {
      font-family: 'MinionPro';
      font-weight: 750;
      font-display: swap;
      src: url('/fonts/MinionPro-BoldCn.otf') format('opentype');
    }
    `}
  />
)

export default Fonts
