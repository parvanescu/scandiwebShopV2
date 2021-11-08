import styled, {css} from "styled-components";

export const ChoiceWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
`

export const Swatch = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 8px;

  p{
    margin: 0;
    font-weight: 700!important;
    font-size: 18px!important;
    line-height: 18px!important;
  }
`;

export const OptionsLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 12px;
  row-gap: 12px;
`

export const Option = styled.div`
  width: 61px;
  height: 43px;
  border: 1px solid #A6A6A6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  ${props=>props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `}
  
  p{
    font-family: Source Sans Pro,sans-serif!important;
    font-weight: 400!important;
    font-size: 16px!important;
    line-height: 18px!important;
    color: rgba(29,31,34,1)!important;
  }
`