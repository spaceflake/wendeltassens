import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'litter',
  title: 'Kullar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kullnamn',
      description: 'Namnet på kullen',
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
      description: 'En lista på samtliga kattungar som finns i kullen',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'kitten' } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
