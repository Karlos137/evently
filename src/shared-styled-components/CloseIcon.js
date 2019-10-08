import { X } from "styled-icons/boxicons-regular/X";
import styled from "styled-components";

const CloseIcon = styled(X)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default CloseIcon;
