export interface BaseColors {
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
  secondary: "#B036E8",
  tertiary: "#ff5C97",
  success: "#00D876",
  failure: "#F73182",
  info: "#00CBE0",
}

export const lightColors: Colors = {
  ...colors,
  text: "black",
  secondaryText: "white",
  background: "white",
  button: "#FFDF08"
}
