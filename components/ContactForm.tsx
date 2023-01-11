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
    window.location.href = `mailto:lise_lotte_1@hotmail.se?subject=${formData.subject}&body=${formData.message}`;
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
        className="py-4 rounded-md bg-SuperBrown text-Beige"
      />
    </form>
  );
};

export default ContactForm;
