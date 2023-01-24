import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'introTextHome',
  title: 'Intro Text Hemsida',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      description: 'Rubrik som visas ovanför introtexten på startsidan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      description: 'Texten som visas i introtexten på startsidan',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
