import styled from "styled-components";

const Wrapper = styled.div`
  width: 295px;
  margin: 24px auto;

  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 369px 369px;
    grid-column-gap: 32px;
    justify-content: center;
  }

  @media (${props => props.theme.mediaQueries.largeDesktop}) {
    grid-template-columns: 369px 369px 369px;
  }
`;

export default Wrapper;
