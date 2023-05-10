import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const DATE_FORMAT_OPTIONS = {
  weekday: "long",
  day: "2-digit",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export const Clock = () => {
  const date = useCurrentDate(DATE_FORMAT_OPTIONS);

  return <StyledClock>Dziś jest {date}</StyledClock>;
};
