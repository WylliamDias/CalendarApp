import styled from "styled-components";

export const ModalOverlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalForm = styled.form`
margin: auto;
background-color: white;
display: flex;
flex-direction: column;
padding: 64px;
border-radius: 8px;
animation: anmt;
animation-duration: 0.5s;

header h4 {
  font-size: 1.8rem;
  width: fit-content;
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
  padding-right: 2ch;
}

main {
  display: flex;
  flex-direction: column;
  margin: 1.7em 0;

  label {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
}

footer button {
  font-size: 1rem;
  color: white;
  font-weight: 400;
  padding: 0.3em 1em;
  line-height: 1.5em;
  background-color: hsl(263, 24%, 45%);
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: hsl(263, 24%, 30%);
  }

}

@keyframes anmt {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
`;

export const CloseModalButton = styled.button`
position: absolute;
font-size: 1rem;
top: 10px;
right: 10px;
color: white;
background-color: hsl(0, 100%, 60%);
border-radius: 8px;
border: none;
width: 2rem;
height: 2rem;
cursor: pointer;
transition: 0.3s;

&:hover {
  background-color: hsl(0, 100%, 50%);
}
`;

export const InputBox = styled.div<{ hasError: boolean; }>`
margin-block: 0.4em 2em;
display: flex;
flex-direction: column;

input {
  padding: 0.8em 1em;
  font-size: 1rem;
  border: 2px solid ${props =>
    props.hasError
      ? 'red'
      : 'lavender'
  };
  border-radius: 8px;
  transition: border-color 0.3s;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #6d5890;
  }
}

span {
  margin-top: 4px;
  font-size: 0.8rem;
  color: red;
  font-weight: 400;
}
`;
