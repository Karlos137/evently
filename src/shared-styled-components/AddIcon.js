import { Plus } from "styled-icons/boxicons-regular/Plus";
import styled from "styled-components";

const AddIcon = styled(Plus)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.text.darkGrey};
  position: relative;
  bottom: ${props => (props.normalText ? "3px" : "4px")};
  cursor: pointer;
`;

export default AddIcon;
