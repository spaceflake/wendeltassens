import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Bildspel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      description: 'Titel som visas i studion men inte på hemsidan',
      type: 'string',
    }),
    defineField({
      name: 'imageList',
      title: 'Bild',
      description: 'En lista på bilder som finns i bildspelet',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});
