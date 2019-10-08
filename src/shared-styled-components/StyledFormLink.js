import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFormLink = styled(Link)`
  color: ${props => props.theme.colors.complementary.blue};
  text-decoration: none;
  cursor: pointer;
`;

export default StyledFormLink;
