import { Colors, lightColors } from "./colors"
import { BaseTheme, baseTheme } from "./base"
import {Text, text} from "./fonts"

export interface Theme {
  colors: Colors
  base: BaseTheme
  text: Text 
}
export const lightTheme: Theme = {
  text,
  colors: lightColors,
  base: baseTheme
}
