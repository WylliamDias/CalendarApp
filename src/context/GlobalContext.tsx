import { createContext, Dispatch, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const defaultValue = new Date();

export interface IEvents {
  id: string;
  date: Date;
  name: string;
  description: string;
}

interface ContextType {
  currentDate: Date;
  setCurrentDate: Dispatch<React.SetStateAction<Date>>;
  events: IEvents[];
  setEvents: Dispatch<React.SetStateAction<IEvents[]>>;
  selectedEvent: IEvents | null;
  setSelectedEvent: Dispatch<React.SetStateAction<IEvents | null>>;
}

export const GlobalContext = createContext<ContextType>({} as ContextType);

export const ContextWrapper: React.FC = ({ children }) => {
  const [ currentDate, setCurrentDate ] = useState<Date>(defaultValue);
  const [ events, setEvents ] = useLocalStorage<IEvents[]>('events', []);
  const [ selectedEvent, setSelectedEvent ] = useState<IEvents | null>(null);

  useEffect(() => {
    console.log(selectedEvent);
  }, [ selectedEvent ]);

  return (
    <GlobalContext.Provider
      value={{
        currentDate: currentDate,
        setCurrentDate: setCurrentDate,
        events: events,
        setEvents: setEvents,
        selectedEvent: selectedEvent,
        setSelectedEvent: setSelectedEvent
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
