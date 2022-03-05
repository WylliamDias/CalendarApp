import styled from "styled-components";

export const DayButton = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
overflow-y: scroll;
scrollbar-width: none;

transition: background-color 0.3s;

&:hover {
  box-shadow: 0px 0px 5px 2px skyblue;
  cursor: pointer;
}

&[data-select] {
  background-color: wheat;
}

&[data-outside-day] > p {
  color: grey;
}
`;

export const DayNumber = styled.p`
width: 100%;
height: fit-content;
text-align: end;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
user-select: none;
padding-right: 0.3em;
`;

export const PreviewEventContainer = styled.div`
background-color: #ACC8E5;
padding: 2px 4px;
margin: 2px 4px;
border-radius: 4px;
cursor: pointer;

p {
  max-width: 16ch;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.7rem;
  text-align: start;
  color: #030F1C;
}
`;
