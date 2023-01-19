import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'catOverview',
  title: 'Katt sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    }),
    defineField({
      name: 'cats',
      title: 'Katter',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cat' } }],
    }),
  ],
});
