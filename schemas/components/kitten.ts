import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kitten',
  title: 'Kattungar',
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
      description:
        'Status på kattungen. Det går att välja mellan "Tillgänglig" eller "Tingad"',
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
          { title: 'Hane', value: 'Hane' },
          { title: 'Hona', value: 'Hona' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
