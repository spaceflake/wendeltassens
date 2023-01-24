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
      title: 'Titel',
      description: 'Titeln som visas i studion men inte på hemsidan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Knapptext',
      description: 'Vad som ska stå inuti knappen',
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
      description: 'Välj i listan till vilkan sida som länken ska gå till',
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
