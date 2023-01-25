import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      description: 'Titel som visas i studion men inte på hemsidan',
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
      name: 'alt',
      title: 'Bildbeskrivning',
      description: 'Lägg till en beskrivning om bilden. En mening räcker',
      type: 'string',
      validation: (Rule) =>
        Rule.max(80).warning(`Titeln borde inte ha mer än 80 tecken`),
      hidden: ({ document }) => !document?.heroImage,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Sid Rubrik',
      description: 'Rubriken som är synlig på frontbilden på hemsidan',
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
      description: 'En text som visas under rubriken på frontbilden',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
    defineField({
      name: 'heroButtonPath',
      title: 'Knapp adress',
      description:
        'Vart länken ska gå. Tex om man vill att länken går till kattunge sidan så skriv kattungar',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Sid Knapp text',
      description: 'Texten som ska stå i knappen',
      type: 'string',
      hidden: ({ parent }) => !parent?.addButton,
    }),
  ],
});
