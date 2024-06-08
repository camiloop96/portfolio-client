import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

const TextContainer: FC = () => {
  // Textos
  const text1 = {
    english: "Coding the future, one line at a time 💫",
    spanish: "Construyendo el futuro, una línea a la vez 💫",
  };

  const text2 = {
    english:
      "Results-driven and highly experienced Software Developer with a strong focus on ReactJS and Express Framework, backed by a solid 4-year track record of delivering impactful web applications.",
    spanish:
      "Desarrollador de software orientado a resultados y altamente experimentado con un fuerte enfoque en ReactJS y Express Framework, respaldado por un sólido historial de 4 años de entrega de aplicaciones web impactantes.",
  };
  return (
    <div className="text_container">
      <div className="text-1_container">
        <h3>
          <RenderLanguage input={text1} />
        </h3>
      </div>
      <div className="text-2_container">
        <h3>
          <RenderLanguage input={text2} />
        </h3>
      </div>
    </div>
  );
};

export default TextContainer;
