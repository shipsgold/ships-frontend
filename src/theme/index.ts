import { Colors, lightColors } from "./colors"
import { BaseTheme, baseTheme } from "./base"

export interface Theme {
  colors: Colors
  base: BaseTheme
}
export const lightTheme: Theme = {
  colors: lightColors,
  base: baseTheme
}
