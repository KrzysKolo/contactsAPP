import { extendTheme } from "@chakra-ui/react";


const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#076bce",
      200: "#065cad",
    },
    secondary: {
      100: "#f9ab00",
      600 : '#e09c08' ,
    },
    orange: {
      500: "#f9ab00",
      300: "#F3CE7E"
    },
    blue: {
      500: "#076BCE",
    },
    green: {
      500: "#6FAF1F"
    },
    white: {
      100: "#FCFCFC"
    },
    red: {
      500: "#cb2e25",
    },
    cardColor: "#6faf1f",
    darkColor: "#21243D",
    lightColor: "#8695A4",
    whiteColor: " #FFFFFF",
    backgroundColor: "#E5E5E5",
    backgroundColor2: "#EDF7FA",
    tagColor: "#142850",
  },
  fonts: {
    body: "system-ui, sans-serif",
    text: "Orbitron, sans-seri",
    mono: "Menlo, monospace",
    button: "Orbitron', sans-serif",
  },
  size: {
    xs: "12px",
    s: "14px",
    lg: '28px'
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
})
export default customTheme;