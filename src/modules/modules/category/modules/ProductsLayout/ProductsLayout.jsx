import styled from "styled-components";

export const ProductsLayout = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(auto-fit,386px);
  grid-auto-flow: row;
`;