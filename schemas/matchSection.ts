import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'matchSection',
  title: 'Planerade kullar sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'matches',
      title: 'Matchningar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'match' } }],
    }),
  ],
});
