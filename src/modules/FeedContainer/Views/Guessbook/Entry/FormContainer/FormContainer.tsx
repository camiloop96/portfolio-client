import { FormValues, useForm } from "@/hooks/useForm";
import { useGuestbook } from "@/hooks/useGuestbook";
import { showErrorNotification } from "@/utils/notificationManager";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC, useEffect, useState } from "react";
import FormInputItem from "./FormInputItem/FormInputItem";
import Arrow from "@/assets/icon/Arrow";

const FormContainer: FC = () => {
  // Guest form title
  const guestFormTitle = {
    english: "Guestbook message form",
    spanish: "Formulario para el libro de invitados",
  };

  // Form abierto
  const [openForm, setOpenForm] = useState<boolean>(false);

  // Manejador del evento
  const handleOpenCloseForm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenForm(!openForm);
  };

  // Formulario inicial
  const initialForm = {
    name: "",
    company: "",
    url: "",
    message: "",
  };

  // Validacion del formulario
  const validationsForm = (form: any) => {
    let errors: FormValues = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexURL = new RegExp(
      "^https?:\\/\\/" +
        '((([a-zA-Z0-9$-_@.&+!*"(),]|(%[0-9a-fA-F]{2}))+)' +
        '(\\:[a-zA-Z0-9$-_@.&+!*"(),]|(%[0-9a-fA-F]{2}))*@)?' +
        "((([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9])|([a-zA-Z0-9]))\\.)*" +
        "([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]\\.[a-zA-Z]{2,})" +
        "(\\:[0-9]{1,5})?" +
        '(\\/[-a-zA-Z0-9$@.&+!*"(),;=]*)*' +
        '(\\?[;&a-zA-Z0-9$-_.+!*"(),%=]*)?' +
        '(#[-a-zA-Z0-9$-_.+!*"(),%=]*)?$',
      "i"
    );
    if (!form.name.trim()) {
      errors.name = '* The "name" field is required';
    } else if (!regexName.test(form.name.trim())) {
      errors.name =
        '* The "name" field cannot contain numbers or special characters.';
    }
    if (!form.company.trim()) {
      errors.company = '* The "company" field is required';
    }
    if (!form.url.trim()) {
      errors.url = '*The "url" field is required';
    } else if (!regexURL.test(form.url.trim())) {
      errors.url = '*The "URL" field must be a valid URL.';
    }

    if (!form.message.trim()) {
      errors.message = '*The "message" field is required';
    }
    return errors;
  };

  // Hook de manejo de formulario
  const { handleChange, form, handleBlur, errors, resetForm } = useForm({
    initialForm: initialForm,
    validateForm: validationsForm,
  });

  // Lock del boton de agendamiento
  const [isLock, setIsLock] = useState<boolean>(false);
  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    setIsLock(hasErrors);
    if (form.name.length === 0) {
      setIsLock(true);
    }
  }, [errors]);

  // Hook de Guestbook
  const { createComments } = useGuestbook();

  // Manejador del evento
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await createComments(form);
      resetForm();
    } catch (error: any) {
      console.log(error);

      showErrorNotification(error.response.error);
    }
  };

  return (
    <div
      className={`guest-form_container ${
        openForm ? "g-form-container_open" : ""
      }`}
    >
      <div className="guest-form_title" onClick={handleOpenCloseForm}>
        <h3 className="g-form-title_text">
          <RenderLanguage input={guestFormTitle} />
        </h3>
        <div className={`g-arrow_container ${openForm ? "rotate" : ""}`}>
          <Arrow />
        </div>
      </div>
      <div className="guest-form_content">
        <form className="g-form">
          <FormInputItem
            name="name"
            title={{ english: "Name", spanish: "Nombre" }}
            onChange={handleChange}
            onBlur={handleBlur}
            form={form}
            errors={errors}
          />
          <FormInputItem
            name="company"
            title={{
              english: "Company / Organization",
              spanish: "Empresa / Organización",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            form={form}
            errors={errors}
          />
          <FormInputItem
            name="url"
            title={{
              english: "URL (Social media, webpage, etc...)",
              spanish: "URL (Red Social, Página web, etc...)",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            form={form}
            errors={errors}
          />

          <FormInputItem
            name="message"
            title={{
              english: "Message",
              spanish: "Mensaje",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            form={form}
            errors={errors}
          />
          <button
            className={`g-form_btn-submit ${
              isLock ? "g-form-btn-submit_lock" : ""
            }`}
            disabled={isLock}
            onClick={handleSubmit}
          >
            <RenderLanguage
              input={{
                english: "Submit",
                spanish: "Envíar",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
