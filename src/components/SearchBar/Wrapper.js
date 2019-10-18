import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 311px;
  margin: ${props =>
    props.theme.mediaQueries.tablet
      ? props.modal
        ? "0px auto 32px"
        : "0px 0px 32px 0px"
      : "0px auto 32px"};
`;

export default Wrapper;
