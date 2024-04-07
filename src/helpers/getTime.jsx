let formattedTime = new Date().toLocaleTimeString("en-US", { hour12: false });

export function getTime() {
  if (formattedTime > 6 && formattedTime < 19) return "Day";
  else {
    return "Night";
  }
}
