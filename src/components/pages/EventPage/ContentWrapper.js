import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: white;
  margin-top: -32px;
  padding: 32px;
  border-radius: 30px 30px 0px 0px;
  z-index: 99;

  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 500px auto;
    max-width: 1200px;
    margin: auto;
    border-radius: none;
  }
`;

export default ContentWrapper;
