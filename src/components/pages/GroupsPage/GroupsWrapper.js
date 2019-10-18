import styled from "styled-components";

const GroupsWrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 338px 338px;
    grid-column-gap: 30px;
    margin: auto;
    align-self: start;
  }
`;

export default GroupsWrapper;
