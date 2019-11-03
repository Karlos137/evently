import styled, { css } from "styled-components";

const disabled = css`
  pointer-events: none;
  opacity: 0.5;
  color: ${props =>
    props.accepted
      ? props.theme.colors.main.green
      : props.theme.colors.complementary.red};
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;

  /* disabled */
  ${props => (props.disabled ? disabled : null)}
`;

export default Wrapper;
