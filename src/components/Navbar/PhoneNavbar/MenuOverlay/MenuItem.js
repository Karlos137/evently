import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
  border-bottom: #dce2eb 1px solid;
  padding: 21px 0px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  z-index: 99;
`;

export default MenuItem;
