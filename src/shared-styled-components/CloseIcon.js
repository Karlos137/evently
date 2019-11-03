import { X } from "styled-icons/boxicons-regular/X";
import styled from "styled-components";

const CloseIcon = styled(X)`
  width: 32px;
  height: 32px;
  color: ${props =>
    props.color === "red"
      ? props.theme.colors.complementary.red
      : props.theme.colors.text.darkGrey};
  cursor: pointer;
`;

export default CloseIcon;
