export function getDateUTC(data) {
  const optionsHour = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
  };
  const t = new Date(data);
  const hour = t.toLocaleTimeString(undefined, optionsHour);

  return hour;
}
