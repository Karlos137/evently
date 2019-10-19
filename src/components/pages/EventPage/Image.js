import styled from "styled-components";

const Image = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${props => (props.image ? props.image : null)});
  width: 100%;
  height: 350px;
`;

export default Image;
