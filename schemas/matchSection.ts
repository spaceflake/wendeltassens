import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'matchSection',
  title: 'Planerade kullar sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'matches',
      title: 'Matchningar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'match' } }],
    }),
  ],
});
