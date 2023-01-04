import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textImageCard',
  title: 'Text och bild kort',
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
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Länk',
      type: 'url',
    }),
  ],
});
