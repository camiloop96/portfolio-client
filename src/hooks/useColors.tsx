export const useColors = () => {
  const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = "90%";
    const lightness = "50%";

    return `hsl(${hue}, ${saturation}, ${lightness})`;
  };

  return { generateRandomColor };
};
