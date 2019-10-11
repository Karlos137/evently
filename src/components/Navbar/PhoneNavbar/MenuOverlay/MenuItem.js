import styled from "styled-components";

const MenuItem = styled.div`
  border-bottom: #dce2eb 1px solid;
  padding: 21px 0px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  z-index: 99;
`;

export default MenuItem;
