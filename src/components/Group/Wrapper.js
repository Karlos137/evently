import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 338px;
  height: 54px;
  margin: ${props =>
    props.theme.mediaQueries.tablet
      ? props.modal
        ? "0px auto 16px"
        : "0px 0px 16px 0px"
      : "0px auto 16px"};
  display: grid;
  grid-template-columns: auto 54px;
`;

export default Wrapper;
