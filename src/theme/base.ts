
export interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export interface MediaQueries {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

const breakpoints: Breakpoints = {
  xs: 300,
  sm: 700,
  md: 900,
  lg: 1000,
  xl: 1200
}

const mediaQueries: MediaQueries = {
  xs: `@media only screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media only screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media only screen and (min-width: ${breakpoints.xl}px)`
}

interface zIndex {
  background: number,
  modal: number,
  modalControl: number,
}

export interface BaseTheme {
  mediaQueries: MediaQueries
  zIndices: zIndex
}

const zIndices: zIndex = {
  background: 0,
  modal: 100,
  modalControl: 101
}

export const baseTheme: BaseTheme = {
  mediaQueries,
  zIndices,
}
