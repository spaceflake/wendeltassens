import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kittenOverview',
  title: 'Kull kort',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kullnamn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'birthDate',
      title: 'Född',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mother',
      title: 'Mor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'father',
      title: 'Far',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pedigreeUrl',
      title: 'Länk till stamtavla',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kittens',
      title: 'Kattungar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'kitten' } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
