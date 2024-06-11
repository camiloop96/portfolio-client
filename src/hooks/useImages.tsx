import { GuestbookContext } from "@/context/GuestbookContext/GuestbookContext";
import { useContext, useState } from "react";

export const useImages = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isBroken, setIsBroken] = useState<boolean>(false);
  const { setLoading } = useContext(GuestbookContext);

  const generateThumbnail = async (imageUrl: string) => {
    setLoading(true);
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        setIsBroken(true);
        return;
      }

      const blob = await response.blob();

      const img = new Image();
      img.src = URL.createObjectURL(blob);
      console.log(img);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 100;
        const maxHeight = 100;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx && ctx.drawImage(img, 0, 0, width, height);
        const thumbnail = canvas.toDataURL("image/jpeg", 0.8);

        setThumbnailUrl(thumbnail);
      };
    } catch (error) {
      if (error) {
        setIsBroken(true);
      }
    } finally {
      setLoading(false);
    }
  };
  return { generateThumbnail, thumbnailUrl, isBroken };
};
