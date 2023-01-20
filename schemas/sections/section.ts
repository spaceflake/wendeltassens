import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'section',
  title: 'Sektion',
  description: 'Lägg till en sektion på sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Typ',
      description: 'Välj typ av sektion',
      type: 'string',
      options: {
        list: [
          { title: 'Sektion med ram', value: 'sectionBordered' },
          { title: 'Sektion med avskiljare', value: 'sectionDivider' },
          { title: 'Sektion', value: 'section' },
        ],
        layout: 'radio',
      },
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
            { type: 'matchOverview' }, //ska ligga här
            { type: 'catOverview' },
            { type: 'FAQOverview' },
            { type: 'contactInformation' },
            { type: 'textField' },
            { type: 'link' },
          ],
        },
      ],
    }),
  ],
});
