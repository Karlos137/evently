import styled from "styled-components";
import { Check } from "styled-icons/boxicons-regular/Check";

const CheckIcon = styled(Check)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.main.green};
  cursor: pointer;
`;

export default CheckIcon;
