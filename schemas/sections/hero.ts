import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Namn',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Sid Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Sid Rubrik',
      type: 'string',
    }),
    defineField({
      name: 'addButton',
      title: 'Lägg till innehåll',
      description:
        'Vill du lägga till knapp och extra text? Lämnas denna tom visas endast bild och rubrik',
      type: 'boolean',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero text',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
    defineField({
      name: 'heroButtonPath',
      title: 'Knapp adress',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Sid Knapp text',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
  ],
});
