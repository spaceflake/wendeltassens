import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'matchOverview',
  title: 'Planerade kullar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Planerade kullar',
    }),
    defineField({
      name: 'matches',
      title: 'Matchningar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'match' } }],
    }),
  ],
});
