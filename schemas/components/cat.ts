import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cat',
  title: 'Katt kort',
  type: 'document',
  fields: [
    defineField({
      name: 'catImgUrl',
      title: 'Kattbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breeder',
      title: 'Uppfödare',
      description: 'Namn på uppfödare av katten',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Kattnamn',
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
      description:
        'Om man vill lägga till ytterligare information. Detta är valfritt',
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
