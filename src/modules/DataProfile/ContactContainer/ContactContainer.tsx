import Send from "@/assets/svg/Send";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

const ContactContainer: FC = () => {
  const text1 = {
    english: "¡Be the first to know about my latest projects and code tips!",
    spanish:
      "¡Sé el primero en conocer mis últimos proyectos y tips de desarrollo!",
  };
  const noSpam = {
    english: "Don’t worry, no spam. Unsuscribe anytime.",
    spanish: "No te preocupes, no es spam. Des-suscríbete cuando quieras.",
  };
  return (
    <div className="contact_container">
      <div className="contact_content">
        <div className="calltoaction-text">
          <h4>
            <RenderLanguage input={text1} />
          </h4>
        </div>
        <div className="input_container">
          <input type="text" className="email_input" placeholder="Email" />
          <button className="submit_btn">
            <Send />
          </button>
        </div>
        <div className="nospam-text">
          <h4>
            <RenderLanguage input={noSpam} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
