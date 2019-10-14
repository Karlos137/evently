import styled from "styled-components";
import { PlusCircle } from "styled-icons/boxicons-regular/PlusCircle";

const PlusIcon = styled(PlusCircle)`
  width: 54px;
  height: 54px;
  color: ${props => props.theme.colors.secondary.lightOrange};
  cursor: pointer;
`;

export default PlusIcon;
