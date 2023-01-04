import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'introTextHome',
  title: 'Intro Text Hemsida',
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
  ],
});
