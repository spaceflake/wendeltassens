import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Sida',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sid Namn',
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
      name: 'heroButton',
      title: 'Sid Knapp',
      type: 'string',
    }),
    defineField({
      name: 'component',
      title: 'Komponent',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'introTextHome' },
            { type: 'textboxBordered' },
            { type: 'postContainer' },
          ],
        },
      ],
    }),
  ],
});
