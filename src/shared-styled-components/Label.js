import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 21px auto 10px;
  width: 311px;
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
`;

export default Label;
