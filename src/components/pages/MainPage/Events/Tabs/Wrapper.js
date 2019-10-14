import styled from "styled-components";

const Wrapper = styled.div`
  /* horizontal scroll */
  overflow: auto;
  white-space: nowrap;
  /* make scrollbar invisible */
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  margin-top: 21px;
  text-align: center;
`;

export default Wrapper;
