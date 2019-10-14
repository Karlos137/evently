import styled from "styled-components";

const DateInfo = styled.div`
  width: 58px;
  height: 58px;
  background-color: ${props => props.theme.colors.background.lightGrey};
  border-radius: 0px 3px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export default DateInfo;
