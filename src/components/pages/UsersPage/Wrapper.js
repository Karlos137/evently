import styled from "styled-components";

const Wrapper = styled.div`
  margin: 32px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 32px 48px 32px;
  }
  @media (${props => props.theme.mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1047px;
    margin: 32px auto 32px;
  }
`;

export default Wrapper;
