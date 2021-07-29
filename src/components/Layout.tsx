import styled from "styled-components";
import { ThemeProp } from "./types";

export const LandingBaseLayout: React.FC = styled.div`
${({ theme }: ThemeProp) => theme.base.mediaQueries.xs}{
        display: grid;
        grid-template-rows: 3rem 1fr 1fr 1fr 2fr;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
}
`
export const AppBaseLayout: React.FC = styled.div`
${({ theme }: ThemeProp) => theme.base.mediaQueries.xs}{
}
`


export const foobar ={}