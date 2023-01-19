import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'menu',
  title: 'Meny',
  description: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Meny',
    }),
    defineField({
      name: 'pages',
      title: 'Sidor',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    }),
  ],
});
