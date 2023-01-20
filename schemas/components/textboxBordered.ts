import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textboxBordered',
  title: 'Textyta med ram',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Lägg till knapp',
      type: 'boolean',
    }),
    defineField({
      name: 'buttonPath',
      title: 'Till vilken sida',
      type: 'string',
      hidden: ({ parent }) => !parent?.button,
    }),
    defineField({
      name: 'buttonText',
      title: 'Text i knappen',
      type: 'string',
      hidden: ({ parent }) => !parent?.button,
    }),
  ],
});
