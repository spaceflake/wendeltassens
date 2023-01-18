import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'match',
  title: 'Matchning',
  type: 'document',
  fields: [
    defineField({
      name: 'motherImgUrl',
      title: 'Moder bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fatherImgUrl',
      title: 'Fader bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'motherName',
      title: 'Moder namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fatherName',
      title: 'Fader namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pedigreeUrl',
      title: 'Länk till stamtavla',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Information',
      type: 'text',
    }),
  ],
});
