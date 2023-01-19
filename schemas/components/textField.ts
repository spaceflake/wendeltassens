import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textField',
  title: 'Textstycke',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'initialCapital',
      title: 'Anfang',
      description: 'Om första bokstaven ska ha en annan stil',
      type: 'string',
      options: {
        list: [
          { title: 'Ja', value: 'true' },
          { title: 'Nej', value: 'false' },
        ],
        layout: 'radio',
      },
    }),
  ],
});
