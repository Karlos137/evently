import styled from "styled-components";

const InputField = styled.input`
  color: ${props => props.theme.colors.text.grey};
  font-size: ${props => props.theme.fontSizes.normal};
  margin: auto;
  margin-bottom: ${props => props.marginBottom || "16px"};
  padding: 0px 16px;
  width: 311px;
  height: 48px;
  display: block;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.background.lightGrey};
  border: ${props =>
    props.error ? `1px ${props.theme.colors.complementary.red} solid` : "none"};

  ::placeholder {
    color: ${props => props.theme.colors.text.grey};
    font-size: ${props => props.theme.fontSizes.normal};
  }
`;

export default InputField;
