import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInformation',
  title: 'Kontaktuppgifter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Kontaktuppgifter',
    }),
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
