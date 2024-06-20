import { useProjects } from "@/hooks/useProjects/useProjects";
import { showErrorNotification } from "@/utils/notificationManager";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "@/modules/Spinners/Spinner";

interface IModalProjectImagesProps {
  id?: string;
}

interface IProjectImages {
  source: string;
  alt: string;
}
const ModalProjectImages: FC<IModalProjectImagesProps> = ({ id }) => {
  const { getProjectImages } = useProjects();
  const [projectImages, setProjectImages] = useState<IProjectImages[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch project images
  const getDetailProject = async (_id: string) => {
    setLoading(true);
    try {
      let response = await getProjectImages(_id);
      if (response.status === 200) {
        setProjectImages(response.payload);
      }
    } catch (error: any) {
      showErrorNotification(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to load data
  useEffect(() => {
    if (id !== undefined) {
      getDetailProject(id);
    }
  }, [id]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="project-images_slider">
      {loading ? (
        <Spinner />
      ) : (
        <Slider {...settings} className="project_slider">
          {projectImages.map(
            (image, index) => (
              console.log(image),
              (
                <div key={index} className="project-images_container">
                  <img
                    src={image.source}
                    alt={image.alt}
                    className="project-images_item"
                  />
                </div>
              )
            )
          )}
        </Slider>
      )}
    </div>
  );
};

export default ModalProjectImages;
