export interface BaseColors {
    black: string,
    gray: string,
    primary: string,
    secondary: string,
    tertiary: string,
    success: string,
    failure: string,
    info: string,
}

export interface Colors extends BaseColors {
    text: string,
    secondaryText: string,
    button: string,
    background: string
}

const colors = {
  primary: "#FFDF08",
  black: "#333333",
  gray: "#f2f2f2",
  secondary: "#B036E8",
  tertiary: "#ff5C97",
  success: "#3DFCFC",
  failure: "#A4FF4D",
  info: "#EEFF4D",
}

export const lightColors: Colors = {
  ...colors,
  text: "#333333",
  secondaryText: "white",
  background: "white",
  button: "#FFDF08"
}
