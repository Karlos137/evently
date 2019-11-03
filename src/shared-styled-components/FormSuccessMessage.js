import styled from "styled-components";

const FormSuccessMessage = styled.div`
  max-width: 311px;
  margin: auto;
  margin-bottom: 16px;
  padding: 0px 16px;
  text-align: center;
  color: ${props => props.theme.colors.main.green};
`;

export default FormSuccessMessage;
