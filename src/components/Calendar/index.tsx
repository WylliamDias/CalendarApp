import { useEffect, useState, useContext } from "react";
import ChangeDateButton from "../ChangeDateButton";

import {
  CalendarDaysGrid,
  CalendarHeader,
  CalendarTitle,
  Callendar,
  Container,
  WeekdayName
} from "./styles";

import Day from "../Day";

import {
  FiChevronRight,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronsLeft
} from 'react-icons/fi';

import {
  compareDates,
  getMonthStartingWeekday,
} from "../../utils/dateManager";

import CalendarEvents from "../CalendarEvents";
import { GlobalContext } from "../../context/GlobalContext";
import { Modal } from "../Modal";

export const dateAtTheCurrentMoment = new Date();
const numberOfWeekDays = 7;
const numberOfWeekendsToShow = 6;

export interface ICalendarDate {
  day: number | null;
  month: number;
  year: number;
}

const weekDays = (() => {
  const forDay = new Date();
  let arr = [];

  for (let i = 0; i < 7; i++) {
    forDay.setDate(forDay.getDate() - forDay.getDay() + i);
    arr[ i ] = forDay.toLocaleString(window.navigator.language || 'en-US', { weekday: 'short' }).slice(0, 3);
  }

  return arr.map((weekday, index) => <WeekdayName key={`${weekday}${index}`} children={weekday} />);
})();

const Calendar: React.FC = () => {

  const { currentDate, setCurrentDate } = useContext(GlobalContext);

  const [ daysInCalendarFormat, setDaysInCalendarFormat ] = useState<Date[]>([]);
  const [ calendarDate, setCalendarDate ] = useState<Date>(currentDate);
  const [ showForm, setShowForm ] = useState<boolean>(false);

  function createFormatedCalendar(): Date[] {
    const [ , month, year ] = calendarDate.toLocaleDateString().split('/').map(Number);
    const allDaysCalendar = Array(numberOfWeekDays * numberOfWeekendsToShow);
    const monthStartingWeekendDay = getMonthStartingWeekday(calendarDate);

    for (let i = 0; i < allDaysCalendar.length; i++) {
      allDaysCalendar[ i ] = new Date(year, month - 1, i - monthStartingWeekendDay + 1);
    }

    return allDaysCalendar;
  }

  function toggleDayActive(dayRef: number): void {
    setCurrentDate(() => {
      return new Date(calendarDate.getFullYear(), calendarDate.getMonth(), dayRef);
    });
  }

  function handleAddMonth() {
    setCalendarDate(prevDate => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
    });
  }

  function handleSubtractMonth() {
    setCalendarDate(prevDate => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
    });
  }

  function handleAddYear() {
    setCalendarDate(prevDate => {
      return new Date(prevDate.getFullYear() + 1, prevDate.getMonth());
    });
  }

  function handleSubtractYear() {
    setCalendarDate(prevDate => {
      return new Date(prevDate.getFullYear() - 1, prevDate.getMonth());
    });
  }

  function currentDayIsFromWhichMonth(month: number, monthToCompare: number): string | null {
    return (
      month < monthToCompare
        ? 'isFromPreviousMonth'
        : (
          month > monthToCompare
            ? 'isFromNextMonth'
            : null
        )
    );
  }

  useEffect(() => {
    setDaysInCalendarFormat(() => createFormatedCalendar());
  }, [ calendarDate ]);

  function showSuccesfullyMessage(message: string) {
    alert(message);
  }

  return (
    <>
      <Container>
        <Callendar>
          <CalendarHeader>

            <ChangeDateButton handleClick={handleSubtractYear}>
              <FiChevronsLeft viewBox='0 0 25 25' style={{ width: '2em', height: '2em' }} />
            </ChangeDateButton>

            <ChangeDateButton handleClick={handleSubtractMonth} >
              <FiChevronLeft viewBox='0 0 25 25' style={{ width: '2em', height: '2em' }} />
            </ChangeDateButton>

            <CalendarTitle>
              {`
              ${calendarDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(' de ', ' ')}  
              `}
            </CalendarTitle>

            <ChangeDateButton handleClick={handleAddMonth}>
              <FiChevronRight viewBox='0 0 25 25' style={{ width: '2em', height: '2em' }} />
            </ChangeDateButton>
            <ChangeDateButton handleClick={handleAddYear}>
              <FiChevronsRight viewBox='0 0 25 25' style={{ width: '2em', height: '2em' }} />
            </ChangeDateButton>

          </CalendarHeader>

          <CalendarDaysGrid>

            {weekDays.map(weekDay => weekDay)}

            {
              daysInCalendarFormat.map(
                (day, index) => {
                  const currentDayOrigin = currentDayIsFromWhichMonth(day.getMonth(), calendarDate.getMonth());
                  const currentDayProps = (
                    {
                      'data-outside-day': currentDayOrigin,
                      onClick: (
                        (currentDayOrigin == 'isFromPreviousMonth' && handleSubtractMonth) ||
                        (currentDayOrigin == 'isFromNextMonth' && handleAddMonth) ||
                        (() => toggleDayActive(day.getDate()))
                      )
                    }
                  );

                  return (
                    <Day
                      {...currentDayProps}
                      key={`${day.toLocaleString() + index}`}
                      dataSelect={compareDates(currentDate, day) ? '' : null}
                      dayDate={day}
                    />
                  );
                }
              )
            }
          </CalendarDaysGrid>

          <CalendarEvents openModal={() => setShowForm(true)} />

        </Callendar>
      </Container>

      {showForm && <Modal closeModal={() => setShowForm(false)} showMessage={showSuccesfullyMessage} />}
    </>
  );

};

export default Calendar;
