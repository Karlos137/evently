import styled from "styled-components";
import { Map } from "styled-icons/boxicons-solid/Map";

const LocationIcon = styled(Map)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.secondary.lightOrange};
`;

export default LocationIcon;
