import { FormValues } from "@/hooks/useForm";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { ChangeEvent, FC } from "react";

interface IFormItemProps {
  name: string;
  title: {
    english: string;
    spanish: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  form: any;
  onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: FormValues;
}

const FormInputItem: FC<IFormItemProps> = ({
  onChange,
  form,
  onBlur,
  title,
  name,
  errors,
}) => {
  return (
    <div className="g-form-input_container">
      <h4 className="g-form_title">
        <RenderLanguage input={title} />
      </h4>
      {name === "message" ? (
        <textarea
          className={`g-form_textarea ${errors[name] && "g-form-input_error"}`}
          name={name}
          value={form[name]}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          type="text"
          className={`g-form_input ${errors[name] && "g-form-input_error"}`}
          onChange={onChange}
          name={name}
          value={form[name]}
          onBlur={onBlur}
        />
      )}
      {errors[name] && <p className="g-form_error">{errors[name]}</p>}
    </div>
  );
};

export default FormInputItem;
