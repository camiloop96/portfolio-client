import { FC } from "react";

/**
 * Banner Component
 *
 * This functional component renders a banner with an image.
 * The image source and alt text are defined within the component.
 *
 * @returns JSX.Element
 */
const Banner: FC = () => {
  // Define the banner image details
  const bannerImage = {
    source:
      "https://res.cloudinary.com/devsy44f3/image/upload/f_auto,q_auto,fl_lossy,c_scale/v1712203352/Portfolio/Banner/1682042717920_1_qlwume.png",
    alt: "Banner Portfolio Image",
  };

  // Return the JSX for the banner
  return (
    <div className="banner_container">
      <img src={bannerImage.source} alt={bannerImage.alt} />
    </div>
  );
};

export default Banner;
