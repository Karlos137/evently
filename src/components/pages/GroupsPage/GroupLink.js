import styled from "styled-components";
import { Link } from "react-router-dom";

const GroupLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default GroupLink;
