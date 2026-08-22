import { createTheme } from '@mui/material/styles'
import { token } from './tokens'

const px = (path, fallback) => {
  const value = token(path, fallback)
  return typeof value === 'number' ? `${value}px` : value
}

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: token('colors.brand.500'),
      light: token('colors.brand.400'),
      dark: token('colors.brand.700'),
      contrastText: token('colors.base.white'),
    },
    error: {
      main: token('colors.accent.red.500'),
      light: token('colors.accent.red.400'),
      dark: token('colors.accent.red.700'),
    },
    warning: {
      main: token('colors.accent.orange.500'),
      light: token('colors.accent.orange.400'),
      dark: token('colors.accent.orange.700'),
    },
    success: {
      main: token('colors.accent.green.500'),
      light: token('colors.accent.green.400'),
      dark: token('colors.accent.green.700'),
    },
    text: {
      primary: token('formElements.content.primaryTextColor'),
      secondary: token('formElements.content.secondaryTextColor'),
    },
    background: {
      default: token('colors.neutral.25'),
      paper: token('colors.base.white'),
    },
    divider: token('colors.neutral.200'),
  },
  typography: {
    fontFamily: [`"${token('baseFont', 'Inter')}"`, 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    h1: { fontSize: px('fontSize.h1'), lineHeight: px('lineHeight.h1'), fontWeight: fontWeight.bold },
    h2: { fontSize: px('fontSize.h2'), lineHeight: px('lineHeight.h2'), fontWeight: fontWeight.bold },
    h3: { fontSize: px('fontSize.h3'), lineHeight: px('lineHeight.h3'), fontWeight: fontWeight.semiBold },
    h4: { fontSize: px('fontSize.h4'), lineHeight: px('lineHeight.h4'), fontWeight: fontWeight.semiBold },
    h5: { fontSize: px('fontSize.h5'), lineHeight: px('lineHeight.h5'), fontWeight: fontWeight.medium },
    h6: { fontSize: px('fontSize.h6'), lineHeight: px('lineHeight.h6'), fontWeight: fontWeight.medium },
    subtitle1: { fontSize: px('fontSize.4xl'), lineHeight: px('lineHeight.4xl'), fontWeight: fontWeight.medium },
    subtitle2: { fontSize: px('fontSize.xxxl'), lineHeight: px('lineHeight.xxxl'), fontWeight: fontWeight.medium },
    body1: { fontSize: px('fontSize.xxl'), lineHeight: px('lineHeight.xxl'), fontWeight: fontWeight.regular },
    body2: { fontSize: px('fontSize.xl'), lineHeight: px('lineHeight.xl'), fontWeight: fontWeight.regular },
    button: { fontSize: px('fontSize.l'), fontWeight: fontWeight.semiBold, textTransform: 'none' },
    caption: { fontSize: px('fontSize.s'), lineHeight: px('lineHeight.s'), fontWeight: fontWeight.regular },
  },
  shape: {
    borderRadius: token('radius.s', 6),
  },
  spacing: token('spacing.m', 8),
})

export default theme
