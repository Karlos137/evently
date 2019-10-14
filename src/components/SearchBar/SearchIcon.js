import styled from "styled-components";
import { Search } from "styled-icons/boxicons-regular/Search";

const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 8px;
  top: 12px;
  color: ${props => props.theme.colors.text.grey};
`;

export default SearchIcon;
