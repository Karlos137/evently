import styled from "styled-components";
import { Trash } from "styled-icons/boxicons-solid/Trash";

const DeleteIcon = styled(Trash)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.complementary.red};
`;

export default DeleteIcon;
