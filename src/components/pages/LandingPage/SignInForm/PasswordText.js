import styled from "styled-components";

const PasswordText = styled.div`
  max-width: 311px;
  margin: auto;
  margin-bottom: 32px;
  text-align: right;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.complementary.blue};
  cursor: pointer;
`;

export default PasswordText;
