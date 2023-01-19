import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'externalLinks',
  title: 'Externa länkar',
  description: 'Externa länkar som visas längst ner på sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      description: 'Namn som visas i Studion',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Länkar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Länktext',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Adress',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],
});
