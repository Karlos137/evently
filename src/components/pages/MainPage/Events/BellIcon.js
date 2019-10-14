import { Bell } from "styled-icons/boxicons-solid/Bell";
import styled from "styled-components";

const BellIcon = styled(Bell)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.secondary.brown};
  position: absolute;
  right: 0px;
  top: 2px;
  cursor: pointer;
`;

export default BellIcon;
