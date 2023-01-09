import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Bildspel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'imageList',
      title: 'Bild',
      type: 'array',
      of: [{ type: 'image', title: 'string' }],
    }),
  ],
});
