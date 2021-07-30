import styled from "styled-components";
import BaseStyledButton from "./Button";
import { ThemeProp } from "./types";

const DividerWithText = styled.div`
  display: table;
  line-height: 20px;
  letter-spacing: 2px;
  color: (0,0,0);
  text-align: center;
  width: 90%;
  margin: 0 auto;
  ::before , ::after {
    position: relative;
    top: 0.6em;
    border-top: 1px solid black;
    content: "";
    display: table-cell;
    width: 40%;
  }
`
export default DividerWithText;