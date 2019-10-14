import styled from "styled-components";

const UserImage = styled.img`
  display: block;
  width: ${props => props.width || "54px"};
  height: ${props => props.height || "54px"};
  border-radius: 50%;
`;

export default UserImage;
