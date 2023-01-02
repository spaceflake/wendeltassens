import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Inlägg',
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
      type: 'string',
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
      name: 'publishedAt',
      title: 'Publicerad',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
