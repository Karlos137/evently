import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 24px;
  padding: 0px 8px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 21px;
  }
`;

export default Wrapper;
