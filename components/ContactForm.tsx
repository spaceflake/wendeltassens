'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lise_lotte_1@hotmail.com?subject=${
      formData.subject
    }&body=${encodeURIComponent(formData.message)}%0D%0Amvh%20${
      formData.name
    }%0D%0A${formData.email}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col pt-10 space-y-4 font-bold text-DarkBrown lg:pl-10 lg:pt-0"
    >
      <label htmlFor="name" className="block">
        <span>Namn</span>
        <input
          {...register('name')}
          type="text"
          name="name"
          id="name"
          className="formField"
        />
      </label>
      <label htmlFor="email" className="block">
        <span>Email</span>
        <input
          {...register('email')}
          type="email"
          name="email"
          id="email"
          className="formField"
        />
      </label>
      <label htmlFor="subject" className="block">
        <span>Ämne</span>
        <input
          {...register('subject')}
          type="text"
          name="subject"
          id="subject"
          className="formField"
        />
      </label>
      <label htmlFor="message" className="block">
        <span>Meddelande</span>
        <textarea
          {...register('message')}
          name="message"
          id="message"
          cols={30}
          rows={7}
          className="formField"
        />
      </label>
      <input
        type="submit"
        value="Skicka"
        className="py-4 transition-all rounded-md cursor-pointer bg-SuperBrown text-Beige hover:bg-SuperBrown/50 hover:text-SuperBrown hover:tracking-widest "
      />
    </form>
  );
};

export default ContactForm;
