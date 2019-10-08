import styled from "styled-components";

const FormErrorMessage = styled.div`
  max-width: 311px;
  margin: auto;
  margin-bottom: 16px;
  padding: 0px 16px;
  color: ${props => props.theme.colors.complementary.red};
`;

export default FormErrorMessage;
