import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'introMatches',
  title: 'Intro Text Planerade kullar',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
});
