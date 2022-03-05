import Calendar from "../components/Calendar";
import { ContextWrapper } from "../context/GlobalContext";

export const App: React.FC = () => {
  return (
    <ContextWrapper>
      <Calendar />
    </ContextWrapper>
  );
};
