import styled from "styled-components";

export const CalendarEventsContainer = styled.section`
display: grid;
grid-template-rows: auto 1fr auto;
grid-area: event;
border-radius: 0px 0px 10px 10px;
background-color: wheat;
overflow: hidden;

header {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
}

header h6 {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid black;
}

main {
  padding: 0px 8px;
  overflow-y: hidden;
}

main ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
  overflow-y: scroll;
  scrollbar-width: none;
}

p {
  font-size: .8rem;
  margin-top: 5px;
  color: white;
}

main ul > div {
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: lightskyblue;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  margin: 8px 0px;
  animation: updiv;
  animation-duration: 0.2s;

}

@keyframes updiv {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

footer {
  padding: 8px 0px;
  box-shadow: 0px -1px 5px rgba(0,0,0,0.3);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #6f6fc4;
    cursor: pointer;
    height: 100%;
    margin-left: auto;
    font-size: 1.3rem;
    color: #6f6fc4;
    transition: all 0.3s ease 0s;
    width: fit-content;
    padding: 4px 16px;
    border-radius: 4px;
    margin-right: 1em;

    span {
      width: 0px;
      overflow: hidden;
      transition: 0.2s ease-in;
      opacity: 0;
    }

    &:hover {
      background-color: #6f6fc4;
      color: white;

      span {
        width: 6ch;
        opacity: 1;
      }
    }

  }
}
`;

export const EventCardButton = styled.button<{ color: string; }>`
background-color: transparent;
border: none;
padding: 4px 8px;
font-size: 1rem;
font-weight: 400; cursor: pointer; transition: 0.3s ease-in-out; border-radius: 4px;
color: ${props => props.color};

&:hover {
  background-color: ${props => props.color};
  color: white;
}

`;
