import styled from "styled-components";

const FormWrapper = styled.div`
  margin: auto;
  @media (${props => props.theme.mediaQueries.desktop}) {
    margin: 0;
    width: 311px;
    justify-self: end;
  }
`;

export default FormWrapper;
