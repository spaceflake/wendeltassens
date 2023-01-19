import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'externalLinks',
  title: 'Externa länkar',
  description: 'Externa länkar som visas längst ner på sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Externa länkar',
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
