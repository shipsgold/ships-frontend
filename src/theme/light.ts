import {baseTheme as base, BaseTheme} from "./base"
import {lightColors} from "./colors"
 
export interface Theme {
   base: BaseTheme
}

const lightTheme = {
  base,
  colors: lightColors,
}

export default lightTheme;