import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cat',
  title: 'Katt kort',
  type: 'document',
  fields: [
    defineField({
      name: 'catImgUrl',
      title: 'Katt bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breeder',
      title: 'Uppfödare',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Namn',
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
      name: 'colorCode',
      title: 'Täckning',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'information',
      title: 'Övrigt',
      type: 'text',
    }),
    defineField({
      name: 'pedigreeUrl',
      title: 'Länk till stamtavla',
      type: 'url',
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
    }),
  ],
});
