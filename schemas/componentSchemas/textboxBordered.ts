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
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
});
