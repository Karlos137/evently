import styled from "styled-components";

const Wrapper = styled.div`
  @media (${props => props.theme.mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 70px;
  }
`;

export default Wrapper;
