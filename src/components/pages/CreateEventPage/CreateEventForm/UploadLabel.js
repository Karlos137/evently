import styled from "styled-components";

const UploadLabel = styled.label`
  background-image: ${props => props.theme.colors.gradients.lightBrownToBrown};
  display: inline-block;
  margin: auto;
  width: 160px;
  height: 48px;
  padding: 14px 23px 15px;
  border: none;
  cursor: pointer;
  color: white;
`;

export default UploadLabel;
