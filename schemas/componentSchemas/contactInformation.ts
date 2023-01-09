import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInformation',
  title: 'Kontaktinformation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Telefonnummer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
