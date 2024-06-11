/**
 * Get initials from a full name.
 * @param {string} fullName - The full name from which to extract initials.
 * @returns {string} The initials derived from the full name.
 */

export const getInitials = (fullName: string): string => {
  // Split the full name into an array of names
  const names = fullName.split(" ");

  // Initialize an empty string for the initials
  let initials = "";

  // Loop through the names array and extract the first character of each name
  for (let i = 0; i < Math.min(names.length, 2); i++) {
    initials += names[i].charAt(0); // Add the first character of each name to initials
  }

  return initials.toUpperCase(); // Convert the initials to uppercase and return
};
