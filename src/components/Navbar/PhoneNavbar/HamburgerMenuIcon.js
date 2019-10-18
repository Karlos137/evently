import styled from "styled-components";
import { MenuAltLeft } from "styled-icons/boxicons-regular/MenuAltLeft";

const HamburgerMenuIcon = styled(MenuAltLeft)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.text.darkGrey};
  cursor: pointer;
`;

export default HamburgerMenuIcon;
