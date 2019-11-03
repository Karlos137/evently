import styled, { css } from "styled-components";

const disabled = css`
  pointer-events: none;
  opacity: 0.5;
`;

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
  ${props => (props.disabled ? disabled : null)}
`;

export default UploadLabel;
