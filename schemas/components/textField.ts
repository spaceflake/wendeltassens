import { defineArrayMember, defineField, defineType } from 'sanity';

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
    defineField({
      name: 'content',
      title: 'Innehåll',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Rubrik 1', value: 'h1' },
            { title: 'Rubrik 2', value: 'h2' },
            { title: 'Rubrik 3', value: 'h3' },
            { title: 'Rubrik 4', value: 'h4' },
            { title: 'Rubrik 5', value: 'h5' },
            { title: 'Rubrik 6', value: 'h6' },

            { title: 'Citat', value: 'blockquote' },
          ],
          lists: [
            { title: 'Lista', value: 'bullet' },
            { title: 'Numrerad lista', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Fet', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
              { title: 'Understruken', value: 'underline' },
              { title: 'Överstruken', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Länk',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});
