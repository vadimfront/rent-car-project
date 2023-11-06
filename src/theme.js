import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      100: "#8aaaf5",
      200: "#3470FF",
    },
    gray: {
      100: "rgba(18, 20, 23, 0.1)",
      200: "rgba(18, 20, 23, 0.5)",
    },
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  fontWeights: {
    400: "normal",
    500: "medium",
    600: "bold",
  },
});
