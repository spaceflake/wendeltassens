import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Fråga och svar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Fråga',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Svar',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
