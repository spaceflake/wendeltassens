import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kittenSection',
  title: 'Kattunge sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    }),
    defineField({
      name: 'litterContainer',
      title: 'Kullar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'kittenOverview' } }],
    }),
  ],
});
