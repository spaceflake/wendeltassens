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
    }),
    defineField({
      name: 'birthDate',
      title: 'Född',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'mother',
      title: 'Mor',
      type: 'string',
    }),
    defineField({
      name: 'father',
      title: 'Far',
      type: 'string',
    }),
    defineField({
      name: 'pedigreeUrl',
      title: 'Länk till stamtavla',
      type: 'string',
    }),
    defineField({
      name: 'kittens',
      title: 'Kattungar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'kitten' } }],
    }),
  ],
});
