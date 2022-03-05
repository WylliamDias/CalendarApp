import styled from "styled-components";

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 0.8em;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: clamp(0.5em, 2vw, 7.5pt);
}
`;

export { ButtonContainer };
