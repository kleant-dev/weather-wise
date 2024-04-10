export default function getDayName(d) {
  const date = new Date(d);
  return date.toLocaleDateString("default", { weekday: "long" });
}
