import { colors, darkTheme, lightTheme } from './colors'
import { opacify } from './utils'

function getDeprecatedTheme(darkMode: boolean) {
  return {
    // base
    deprecated_white: colors.white,
    deprecated_black: colors.black,

    // text
    deprecated_text1: darkMode ? darkTheme.textPrimary : lightTheme.textPrimary,
    deprecated_text2: darkMode ? darkTheme.textSecondary : lightTheme.textSecondary,
    deprecated_text3: darkMode ? darkTheme.textTertiary : lightTheme.textTertiary,
    deprecated_text4: darkMode ? colors.gray200 : colors.gray200,
    deprecated_text5: darkMode ? colors.gray500 : colors.gray500,

    // backgrounds / grays
    deprecated_bg0: darkMode ? colors.gray900 : colors.gray900,
    deprecated_bg1: darkMode ? colors.gray800 : colors.gray800,
    deprecated_bg2: darkMode ? colors.gray700 : colors.gray700,
    deprecated_bg3: darkMode ? colors.gray600 : colors.gray600,
    deprecated_bg4: darkMode ? colors.gray500 : colors.gray500,
    deprecated_bg5: darkMode ? colors.gray400 : colors.gray400,
    deprecated_bg6: darkMode ? colors.gray300 : colors.gray300,

    //specialty colors
    deprecated_modalBG: darkMode ? opacify(40, colors.black) : opacify(40, colors.black),
    deprecated_advancedBG: darkMode ? opacify(10, colors.black) : opacify(10, colors.black),

    //primary colors
    deprecated_primary1: darkMode ? darkTheme.accentAction : lightTheme.accentAction,
    deprecated_primary2: darkMode ? colors.blue400 : colors.blue400,
    deprecated_primary3: darkMode ? colors.blue300 : colors.blue300,
    deprecated_primary4: darkMode ? '#000000' : '#000000',
    deprecated_primary5: darkMode ? '#153d6f70' : '#153d6f70',
    backgroundOutline: colors.gray750,
    // color text
    deprecated_primaryText1: darkMode ? darkTheme.accentAction : lightTheme.accentAction,

    // secondary colors
    deprecated_secondary1: darkMode ? darkTheme.accentAction : lightTheme.accentAction,
    deprecated_secondary2: darkMode ? opacify(25, colors.gray900) : opacify(25, colors.gray900),
    deprecated_secondary3: darkMode ? opacify(25, colors.gray900) : opacify(25, colors.gray900),

    // other
    deprecated_red1: darkMode ? darkTheme.accentFailure : lightTheme.accentFailure,
    deprecated_red2: darkMode ? darkTheme.accentFailure : lightTheme.accentFailure,
    deprecated_red3: darkMode ? darkTheme.accentFailure : lightTheme.accentFailure,
    deprecated_green1: darkMode ? darkTheme.accentSuccess : lightTheme.accentSuccess,
    deprecated_yellow1: colors.yellow400,
    deprecated_red_bg: colors.red900,
    deprecated_purple3: colors.purple300,
    deprecated_violet3: colors.blueVibrant,
    deprecated_yellow2: colors.yellow500,
    deprecated_yellow3: colors.yellow600,
    deprecated_blue1: darkMode ? darkTheme.accentAction : lightTheme.accentAction,
    deprecated_blue2: darkMode ? darkTheme.accentAction : lightTheme.accentAction,
    deprecated_error: darkMode ? darkTheme.accentFailure : lightTheme.accentFailure,
    deprecated_success: darkMode ? darkTheme.accentSuccess : lightTheme.accentSuccess,
    deprecated_warning: darkMode ? darkTheme.accentWarning : lightTheme.accentWarning,

    // dont wanna forget these blue yet
    deprecated_blue4: darkMode ? '#153d6f70' : '#153d6f70',
  }
}

export const lightDeprecatedTheme = getDeprecatedTheme(false)
export const darkDeprecatedTheme = getDeprecatedTheme(true)
