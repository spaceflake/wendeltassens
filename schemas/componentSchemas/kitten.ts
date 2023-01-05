import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kitten',
  title: 'Kattunge kort',
  type: 'document',
  fields: [
    defineField({
      name: 'catImgUrl',
      title: 'Kattunge bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Tillgänglig', value: 'Tillgänglig' },
          { title: 'Tingad', value: 'Tingad' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Kattunge namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colorCode',
      title: 'Täckning',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Kön',
      type: 'string',
      options: {
        list: [
          { title: 'Hane', value: 'male' },
          { title: 'Hona', value: 'female' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
