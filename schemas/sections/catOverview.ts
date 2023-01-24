import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'catOverview',
  title: 'Katt sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      description: 'Titel som visas i studion men inte på hemsidan',
      type: 'string',
    }),
    defineField({
      name: 'cats',
      title: 'Katter',
      description: 'Lista på samtliga katter som visas på hemsidan',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cat' } }],
    }),
  ],
});
