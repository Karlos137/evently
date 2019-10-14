import styled, { css } from "styled-components";

const active = css`
  color: white;
  background-image: ${props =>
    props.theme.colors.gradients.lightOrangeToOrange};
`;

const Tab = styled.li`
  display: inline-block;
  padding: 10px 16px;
  cursor: pointer;

  ${props => (props.active ? active : null)}
`;

export default Tab;
