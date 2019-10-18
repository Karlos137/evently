import styled from "styled-components";

const ContentWrapper = styled.div`
  @media (${props => props.theme.mediaQueries.desktop}) {
    margin-left: 32px;
  }
`;

export default ContentWrapper;
