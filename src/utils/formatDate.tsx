/**
 * Format a date according to the specified language.
 * @param {Date} date - The date object to format.
 * @param {string} language - The language code ('english' or 'spanish').
 * @returns {string} The formatted date string.
 */

export const formatDate = (date: Date, language: string): string => {
  // Create a new Date object from the provided date
  const newDate = new Date(date);

  // Determine the language code based on the 'language' parameter
  let languageCode = language === "english" ? "en-US" : "es";

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Format the date according to the specified language and options
  const formattedDate = newDate.toLocaleDateString(languageCode, options);
  return formattedDate; // Return the formatted date string
};
