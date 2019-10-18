import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 343px;
  margin: ${props =>
    props.theme.mediaQueries.tablet
      ? props.modal
        ? "0px auto 21px"
        : "0px 0px 21px 0px"
      : "0px auto 21px"};
  display: grid;
  grid-template-columns: 54px auto 54px;
`;

export default Wrapper;
