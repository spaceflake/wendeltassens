import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'catSection',
  title: 'Katt sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'cats',
      title: 'Katter',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'catCard' } }],
    }),
  ],
});
