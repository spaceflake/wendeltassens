import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'postContainer',
  title: 'Inlägg sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      title: 'Inlägg',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],
});
