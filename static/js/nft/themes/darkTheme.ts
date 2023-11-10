import { Theme, vars } from 'nft/css/sprinkles.css'

export const darkTheme: Theme = {
  colors: {
    accentFailure: vars.color.red300,
    accentFailureSoft: 'rgba(253, 118, 107, 0.12)',
    accentAction: 'linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef)',
    accentActionSoft: 'rgba(76, 130, 251, 0.24)',
    accentSuccess: vars.color.green200,

    explicitWhite: '#FFFFFF',
    green: vars.color.green200,
    gold: vars.color.gold200,
    violet: vars.color.violet200,

    backgroundFloating: '#000000',
    backgroundInteractive: vars.color.black,
    backgroundModule: vars.color.black,
    backgroundOutline: vars.color.black,
    backgroundSurface: vars.color.black,
    backgroundBackdrop: vars.color.black,

    modalBackdrop: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',

    stateOverlayHover: `rgba(153,161,189,0.08)`,

    textPrimary: '#FFFFFF',
    textSecondary: vars.color.white,
    textTertiary: vars.color.white,
  },
  shadows: {
    menu: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    genieBlue: '0 4px 16px 0 rgba(251, 113, 133, 0.4)',
    elevation: '0px 4px 16px rgba(251, 113, 133, 0.4)',
    tooltip: '0px 4px 16px rgba(255, 255, 255, 0.2)',
    deep: '12px 16px 24px rgba(0, 0, 0, 0.24), 12px 8px 12px rgba(0, 0, 0, 0.24), 4px 4px 8px rgba(0, 0, 0, 0.32)',
    shallow: '4px 4px 10px rgba(0, 0, 0, 0.24), 2px 2px 4px rgba(0, 0, 0, 0.12), 1px 2px 2px rgba(0, 0, 0, 0.12)',
  },
  opacity: {
    hover: '0.6',
    pressed: '0.4',
  },
}
