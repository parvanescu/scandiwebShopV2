import styled, {css} from "styled-components";
import {withRef} from "../../utils/logProps";



const NavbarUI = styled.div`
  height: 80px;
  display: flex;
  width: calc(100vw - 200px);
  justify-content: space-between;
  position: fixed;
  z-index: 999999999;
  background-color: white;
  margin: 0 100px;
`

export default withRef(NavbarUI);

export const NavigationCategories = styled.div`
  z-index: 500;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 24px;
`

export const NavigationCategory = styled.label`
    padding-right: 16px;
    padding-left: 16px;
    cursor: pointer;
  ${props=> props.selected && css`
      color:#5ECE7B!important;
      border-bottom: 2px solid #5ECE7B;
  `}
`

export const NavigationActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 23px;
  z-index: 500;
`


