import React, { useContext, useEffect, useRef } from "react";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { v4 } from "uuid";
import { GlobalContext, IEvents } from "../../context/GlobalContext";
import { compareDates } from "../../utils/dateManager";
import { CalendarEventsContainer, EventCardButton } from "./styles";

interface ICalendarEventsProps {
  openModal: () => void;
}

// Refazer esse componente do zero - DID

const CalendarEvents: React.FC<ICalendarEventsProps> = ({ openModal }) => {

  const { currentDate, events, setEvents, setSelectedEvent } = useContext(GlobalContext);

  const ulOfEvents = useRef<HTMLUListElement>(null);

  function handleEditEvent(event: IEvents) {
    setSelectedEvent(event);
    openModal();
  }

  function handleClickRemoveEvent(eventID: string) {
    const filteredEvents = events.filter(event => event.id != eventID);

    setEvents(filteredEvents);
  }

  // Scrolls to the most recent event added in the list 
  // after the `listOfCurrentDayEvents` is filled
  useEffect(() => {

    ulOfEvents.current?.scrollBy({
      top: 100 * (events.length || 0),
      behavior: 'smooth'
    });

  }, []);

  return (
    <CalendarEventsContainer>
      <header>
        <h6>
          Eventos
        </h6>
      </header>
      <main>
        <ul ref={ulOfEvents}>
          {events.filter(event => compareDates(event.date, currentDate)).map(eventToShow => {
            return (
              <div key={eventToShow.id}>
                <div>
                  <h3>{eventToShow.name}</h3>
                  <p>{eventToShow.description}</p>
                </div>
                <div>
                  <EventCardButton
                    color={'red'}
                    style={{ marginRight: '8px' }}
                    onClick={() => handleClickRemoveEvent(eventToShow.id)}
                  >
                    <FiTrash />
                  </EventCardButton>
                  <EventCardButton
                    color={'#103744'}
                    onClick={() => handleEditEvent(eventToShow)}
                  >
                    <FiEdit />
                  </EventCardButton>
                </div>
              </div>
            );
          })}
        </ul>
      </main>
      <footer>
        <button onClick={openModal} type="button" /*onClick={handleClickAddEvent}*/>
          <span>Create</span>
          <FiPlus viewBox={'0 0 25 25'} style={{ width: 'auto', height: 'auto' }} />
        </button>
      </footer>
    </CalendarEventsContainer>
  );
};

export default CalendarEvents;
