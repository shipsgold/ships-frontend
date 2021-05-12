import styled from "styled-components";
import { ThemeProp } from "./types";

export const LandingBaseLayout: React.FC = styled.div`
${({ theme }: ThemeProp) => theme.base.mediaQueries.xs}{
        display: grid;
        grid-template-rows: 3rem 1fr 1fr 1fr 2fr;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
}
`

export const HeroLayout: React.FC = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        grid-row: 2 / 3;
        grid-column: 1 / 6;
`

export const foobar ={}