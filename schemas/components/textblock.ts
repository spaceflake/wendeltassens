import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textblock',
  title: 'Enkel text box',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'page',
      title: 'Till vilken Sida',
      type: 'string',
      options: {
        list: [
          { title: 'Kattungar', value: 'kattungar' },
          { title: 'Information och Villkor', value: 'informationVillkor' },
          { title: 'Kontakt', value: 'kontakt' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Till vilken Sektion',
      type: 'string',
      options: {
        list: [
          { title: 'Planerade kullar', value: 'introText' },
          { title: 'Om Ragdolls', value: 'ragdolls' },
          { title: 'Villkor', value: 'terms' },
          { title: 'Kontaktformulär', value: 'kontakt' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
