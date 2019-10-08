import styled from "styled-components";

const Wrapper = styled.header`
  margin: 48px 0px;
  text-align: center;
  @media (${props => props.theme.mediaQueries.desktop}) {
    margin-top: 64px;
  }
`;

export default Wrapper;
