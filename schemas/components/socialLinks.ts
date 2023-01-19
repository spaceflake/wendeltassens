import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLinks',
  title: 'Sociala medie länkar',
  description: 'Sociala medie länkar som visas längst ner på sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Sociala medie länkar',
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
