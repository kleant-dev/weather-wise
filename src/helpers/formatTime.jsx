export function formatTime(dateString) {
  // Parse the date string
  const date = new Date(dateString);

  // Get hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format hours
  const formattedHours = hours % 12 || 12; // Convert 0 to 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if needed

  // Determine AM/PM
  const period = hours < 12 ? "AM" : "PM";

  // Construct formatted time string
  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  return formattedTime; // Output: 6:08 AM
}
