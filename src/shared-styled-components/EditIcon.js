import styled from "styled-components";
import { Edit } from "styled-icons/boxicons-solid/Edit";

const EditIcon = styled(Edit)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.text.grey};
  margin-right: 16px;
  cursor: pointer;
`;

export default EditIcon;
