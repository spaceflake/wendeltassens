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
    }),
    defineField({
      name: 'fatherImgUrl',
      title: 'Fader bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'motherName',
      title: 'Moder namn',
      type: 'string',
    }),
    defineField({
      name: 'fatherName',
      title: 'Fader namn',
      type: 'string',
    }),
    defineField({
      name: 'pedigreeUrl',
      title: 'Länk till stamtavla',
      type: 'url',
    }),
  ],
});
