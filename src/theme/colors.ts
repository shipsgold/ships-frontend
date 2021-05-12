export interface BaseColors {
    primary: string,
    secondary: string,
    tertiary: string,
    success: string,
    failure: string,
    warn: string,
}

export interface Colors extends BaseColors {
    text: string,
    button: string,
    background: string
}

const colors = {
  primary: "#F9F953",
  secondary: "cyan",
  tertiary: "#ff5C97",
  success: "green",
  failure: "red",
  warn: "yellow",
}

export const lightColors: Colors = {
  ...colors,
  text: "black",
  background: "white",
  button: "#ff5C97"
}
