import styled from "styled-components";

const Users = styled.div`
  margin: 16px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 343px 343px;
    grid-column-gap: 20px;
    justify-content: center;
  }

  @media (${props => props.theme.mediaQueries.largeDesktop}) {
    grid-template-columns: 343px 343px 343px;
  }
`;

export default Users;
