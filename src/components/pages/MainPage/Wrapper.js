import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1149px;
  margin: auto;

  @media (${props => props.theme.mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 54px;
  }
`;

export default Wrapper;
