import styled from "styled-components";
import { ThemeProp } from "./types";

const DividerWithText = styled.div`
  display: table;
  line-height: 20px;
  margin-top: 58px;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 1.3rem;
  border-color: ${({theme}: ThemeProp)=>theme.colors.black};
  text-align: center;
  width: 90%;
  margin: 40px auto;
  ::before , ::after {
    position: relative;
    top: 0.6em;
    border-top: 1px solid ${({theme}: ThemeProp)=>theme.colors.black};;
    content: "";
    display: table-cell;
    width: 40%;
  }
`
export default DividerWithText;