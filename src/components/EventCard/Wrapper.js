import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 295px;
  max-width: 369px;
  min-height: 175px;
  max-height: 218px;
  background-color: pink;
  margin: 0px auto 24px;
  background-image: url(${props => props.image});
  background-size: cover;
  box-shadow: inset 0px -60px 20px rgba(34, 34, 34, 0.7);
  border-radius: 3px;
  position: relative;
`;

export default Wrapper;
