import { useState, ChangeEvent } from "react";

export interface FormValues {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

interface UseFormProps {
  initialForm: FormValues;
  validateForm: (form: FormValues) => Errors;
}

interface UseFormReturn {
  form: FormValues;
  errors: Errors;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  resetForm: () => void;
}

export const useForm = ({
  initialForm,
  validateForm,
}: UseFormProps): UseFormReturn => {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    handleChange(e);
    setErrors(validateForm(form));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    resetForm,
  };
};
