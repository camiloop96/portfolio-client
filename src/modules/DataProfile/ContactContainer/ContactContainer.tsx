/**
 * @file ContactContainer.tsx
 * @description This component renders a contact form for subscribing to updates about projects and code tips, with multilingual support.
 */

import { FC, useState } from "react";
import Send from "@/assets/icon/Send";
import { FormValues, useForm } from "@/hooks/useForm";
import Spinner from "@/modules/Spinners/Spinner";
import { RegisterEmailService } from "@/services/EmailServices";
import { RenderLanguage } from "@/utils/RenderLanguage";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notificationManager";

/**
 * @component
 * @name ContactContainer
 * @description Functional component that renders a contact form with multilingual support for subscribing to updates.
 * @returns {JSX.Element} A contact form with an input field for email and a submit button.
 */
const ContactContainer: FC = (): JSX.Element => {
  // Multilingual text
  const text1 = {
    english: "¡Be the first to know about my latest projects and code tips!",
    spanish:
      "¡Sé el primero en conocer mis últimos proyectos y tips de desarrollo!",
  };

  const noSpam = {
    english: "Don’t worry, no spam. Unsubscribe anytime.",
    spanish: "No te preocupes, no es spam. Des-suscríbete cuando quieras.",
  };

  // Initial form state
  const initialForm = {
    email: "",
  };

  // Validation function
  const validationsForm = () => {
    let errors: FormValues = {};
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(form.email.trim())) {
      errors.email = "email_invalid";
    }
    return errors;
  };

  // useForm hook for managing form state and validation
  const { handleChange, form, handleBlur, errors, resetForm } = useForm({
    initialForm: initialForm,
    validateForm: validationsForm,
  });

  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Submit handler
  const handleSubmit = async () => {
    try {
      if (errors.email === "email_invalid") {
        throw new Error("Debes ingresar un email válido");
      }

      setLoading(true);
      const response = await RegisterEmailService(form);
      if (response.status === 201) {
        showSuccessNotification(
          "Gracias por tu visita, ya registramos tu correo"
        );
      } else if (response.status === 200) {
        showSuccessNotification(response.data.message);
      }
    } catch (error: any) {
      showErrorNotification(error.message);
    } finally {
      resetForm();
      setLoading(false);
    }
  };

  return (
    <div className="contact_container">
      <div className="contact_content">
        <div className="calltoaction-text">
          <h4>
            <RenderLanguage input={text1} />
          </h4>
        </div>
        <div
          className={`input_container ${
            errors.email ? "email-input_error" : ""
          }`}
        >
          <input
            type="text"
            className="email_input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            autoComplete="off"
          />
          <button
            className="submit_btn"
            onClick={handleSubmit}
            disabled={Object.keys(form.email).length === 0}
          >
            {loading ? <Spinner /> : <Send />}
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
