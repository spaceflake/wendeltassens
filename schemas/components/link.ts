import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'link',
  title: 'Länk',
  description:
    'En länk till en annan sida eller en extern sida. Ser ut som en knapp.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Namn',
      description: 'Namnet på länken i Studio.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Knapptext',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isInternalLink',
      title: 'Intern länk',
      description:
        'Ska länken gå till en sida på din hemsida? Markera denna ruta och välj en sida i listan nedan.',
      type: 'boolean',
    }),
    defineField({
      name: 'internalLink',
      title: 'Länk till sida',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => !parent?.isInternalLink,
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'Extern länk',
      type: 'url',
      hidden: ({ parent }) => parent?.isInternalLink,
    }),
  ],
});
