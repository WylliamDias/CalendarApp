import { memo, useContext, useMemo } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { compareDates } from "../../utils/dateManager";
import { DayButton, DayNumber, PreviewEventContainer } from "./styles";

export interface IDayProps extends React.ComponentPropsWithoutRef<'div'> {
  dataSelect: string | null;
  dayDate: Date;
}

const Day: React.FC<IDayProps> = ({ dataSelect, dayDate, ...props }) => {

  const { events } = useContext(GlobalContext);
  const filteredEvents = useMemo(() => {
    return events.filter(event => compareDates(event.date, dayDate));
  }, [ events ]);

  return (
    <DayButton
      {...props}
      data-select={dataSelect}
    >
      <DayNumber>
        {dayDate.getDate()}
      </DayNumber>
      {
        filteredEvents.map((eventToShow, index) => index < 2 && (
          <PreviewEventContainer key={eventToShow.id}>
            <p>{eventToShow.name}</p>
          </PreviewEventContainer>
        ))
      }
      {filteredEvents.length > 2 && (<p>{filteredEvents.length - 2}+ More events</p>)}
    </DayButton>
  );
};

export default memo(Day);
