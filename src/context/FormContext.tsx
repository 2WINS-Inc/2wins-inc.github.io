import axios from "axios";
import {
  Accessor,
  Component,
  ParentProps,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";

type MyFormData = {
  company_name: string;
  job_title: string;
  last_name: string;
  first_name: string;
  email: string;
  phone: string;
  message: string;
};

type FormInputEvent = {
  currentTarget: HTMLInputElement | HTMLTextAreaElement;
  target: Element;
};

type FormContextType = [
  Accessor<boolean>,
  {
    updateForm: (e: FormInputEvent) => void;
    validateEmail: () => boolean;
    validatePhone: () => boolean;
    submit: (e: Event) => Promise<boolean>;
  },
];

const FormContext = createContext<FormContextType>();

export const FormProvider: Component<ParentProps> = (props) => {
  const [form, setForm] = createStore<MyFormData>({} as MyFormData);
  const [submitted, setSubmitted] = createSignal<boolean>(false);

  const validateEmail = () => {
    const re =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    return re.test(form.email);
  };

  const validatePhone = () => {
    if (form.phone === "" || form.phone === undefined) {
      return true;
    }
    const re = /0\d{1,4}-\d{1,4}-\d{4}/;
    return re.test(form.phone);
  };

  const store: FormContextType = [
    submitted,
    {
      updateForm(e) {
        const { name, value } = e.currentTarget;
        setForm(name as keyof MyFormData, value);
      },
      validateEmail() {
        return validateEmail();
      },
      validatePhone() {
        return validatePhone();
      },
      async submit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (validateEmail() && validatePhone()) {
          try {
            const response = await axios.post(
              "https://formspree.io/f/xzblvrgb",
              form,
            );
            if (response.status === 200) {
              return true;
            }
          } catch {}
        }
        return false;
      },
    },
  ];

  return (
    <FormContext.Provider value={store}>{props.children}</FormContext.Provider>
  );
};

export function useForm() {
  return useContext(FormContext);
}
