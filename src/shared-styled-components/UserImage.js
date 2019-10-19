import styled, { css } from "styled-components";

const normal = css`
  display: block;
  width: ${props => props.width || "54px"};
  height: ${props => props.height || "54px"};
  border-radius: 50%;
`;

const small = css`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
`;

const UserImage = styled.img`
  ${props => (props.small ? small : normal)}
`;

export default UserImage;
