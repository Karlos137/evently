import styled from "styled-components";
import { CheckCircle } from "styled-icons/boxicons-solid/CheckCircle";

const CheckIcon = styled(CheckCircle)`
  width: 54px;
  height: 54px;
  color: ${props => props.theme.colors.main.lightGreen};
  cursor: pointer;
`;

export default CheckIcon;
