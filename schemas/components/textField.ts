import { deskTool } from 'sanity/desk';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'textField',
  title: 'Textstycke',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      description: 'Titel som visas i studion men inte på hemsidan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      description:
        'Här kan man lägga in text, vill man ha mer kontroll över hur innehållet ska se ut så välj istället "Innehåll" nedan och lämna denna rutan tom',
      type: 'text',
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
      description:
        'Här kan man välja att lägga in innehåll med mer kontroll över hur det ska se ut. Man kan själv välja rubriker, listor samt att lägga till bilder',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Huvudrubrik', value: 'h1' },
            { title: 'Underrubrik', value: 'h2' },

            { title: 'Citat', value: 'blockquote' },
          ],
          lists: [
            { title: 'Punkt lista', value: 'bullet' },
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
