import styled from "styled-components";
import { Calendar } from "styled-icons/boxicons-solid/Calendar";

const CalendarIcon = styled(Calendar)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.secondary.brown};
`;

export default CalendarIcon;
