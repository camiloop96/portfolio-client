import { FC, useContext } from "react";
import Entry from "./Entry/Entry";
import { v4 as uuidv4 } from "uuid";
import { EntryTypes } from "./Entry/EntryTypes";
import Spinner from "../../../Spinners/Spinner";
import { useGuestbook } from "@/hooks/useGuestbook";
import { GuestbookContext } from "@/context/GuestbookContext/GuestbookContext";

const Guessbook: FC = () => {
  const headEntry: EntryTypes = {
    _id: uuidv4(),
    guest: {
      isGuest: false,
    },
    postData: {
      type: "form",
      hasTitle: true,
      title: {
        english: "Hi! Do you want leave a message?",
        spanish: "Hola! ¿Te gustaría dejar un mensaje?",
      },
      message: {
        english:
          "Welcome to my space! This area is designed just for you. Feel free to leave a message, request, or congratulations. Your feedback is highly appreciated! 🚀",
        spanish:
          "¡Bienvenido a mi espacio! Este lugar fue creado para ti. Siéntete libre de dejar un mensaje, una solicitud o una felicitación. ¡Tu opinión es muy valiosa para mí! 🚀",
      },
      hasFlags: false,
      moodFlags: [],
    },
    pinned: true,
    createdAt: new Date(Date.now()),
  };

  // Lista de comentarios
  const { guestbookComments } = useContext(GuestbookContext);

  // Loader de carga
  const { loading } = useGuestbook();

  return (
    <div className="guestbook_container">
      <ul className="guestbook_list">
        <Entry dataPost={headEntry} />
        {loading ? (
          <div className="guestbook_loader">
            <Spinner />
          </div>
        ) : (
          guestbookComments &&
          guestbookComments.map((item: EntryTypes) => (
            <Entry key={item._id} dataPost={item} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Guessbook;
