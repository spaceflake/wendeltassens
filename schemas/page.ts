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
      name: 'addButton',
      title: 'Lägg till knapp',
      type: 'boolean',
    }),
    defineField({
      name: 'heroButtonPath',
      title: 'Sid Knapp adress',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Sid Knapp text',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
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
            { type: 'textImageCard' },
            { type: 'kittenSection' },
            { type: 'matchSection' },
            { type: 'textblock' },
            { type: 'faq' },
            { type: 'catSection' },
          ],
        },
      ],
    }),
  ],
});
