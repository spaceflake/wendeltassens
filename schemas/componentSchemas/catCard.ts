import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'catCard',
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
    }),
    defineField({
      name: 'breeder',
      title: 'Uppfödare',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Namn',
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
      name: 'colorCode',
      title: 'Täckning',
      type: 'string',
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
    }),
  ],
});
