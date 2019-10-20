import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 59.32%;
  background-color: pink;
  margin: 0px auto 24px;
  background-image: url(${props => props.image});
  background-size: cover;
  box-shadow: inset 0px -60px 20px rgba(34, 34, 34, 0.7);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

export default Wrapper;
