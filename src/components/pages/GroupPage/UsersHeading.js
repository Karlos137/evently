import styled from "styled-components";

const UsersHeading = styled.h2`
  margin-top: 16px;
  padding-left: 21px;
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding-left: 5px;
    width: 706px;
    margin: auto;
  }

  @media (${props => props.theme.mediaQueries.largeDesktop}) {
    width: 1069px;
    margin: auto;
  }
`;

export default UsersHeading;
