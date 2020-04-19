import styled from "styled-components";

const Text = styled.p`
  max-width: 250px;
  margin: auto;
  margin-top: 16px;
  color: ${(props) => (props.grey ? "#7D7D7D" : "#222222")};
`;

export default Text;
