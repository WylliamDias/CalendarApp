import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #f2f2f2;
`;

export const Callendar = styled.main`
width: 95vw;
height: 95vh;
background-color: white;
border-radius: 25px;
padding: 18px;
color: #1a1919;
font-family: 'Ubuntu';
overflow-y: hidden;
display: grid;
grid-template-rows: 2em 1fr 1fr;
grid-gap: 0.5em;
grid-template-columns: 1fr 33%;
grid-template-areas: 'title event' 'cal event' 'cal event';
`;

export const CalendarHeader = styled.header`
display: grid;
grid-template-columns: repeat(2, auto) 1fr repeat(2, auto);
align-items: center;
grid-column-gap: 1em;
grid-area: title;
`;

export const CalendarTitle = styled.h4`
text-align: center;
text-transform: capitalize;
font-size: clamp(0.7em, 4.4vw, 14pt);
`;

export const CalendarDaysGrid = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: 2em repeat(6, 1fr);
grid-area: cal;
align-items: center;
text-align: center;
font-size: clamp(0.54em, 3vw, 10pt);
border-style: solid;
border-width: 1px 0px 0px 1px;
border-color: lightgray;

& > * {
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  border-color: lightgray;
}
`;

export const WeekdayName = styled.p`
font-weight: bold;
text-transform: capitalize;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
