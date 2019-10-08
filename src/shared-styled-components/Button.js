import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: auto;
  width: 311px;
  height: 48px;
  border: none;
  background-image: ${props => props.theme.colors.gradients.lightGreenToGreen};
  cursor: pointer;
  border-radius: 2px;
`;

export default Button;
