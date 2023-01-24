import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Inlägg',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      description: 'Rubrik på blogginlägget som visas på hemsidan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      description: 'Textinnehållet på blogginlägget',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      description:
        'Bild som visas i blogginlägget. Det är valfritt att lägga till en bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publicerad',
      description: 'Datum då blogginlägget skapas',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
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
