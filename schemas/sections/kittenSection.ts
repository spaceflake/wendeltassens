import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kittenSection',
  title: 'Aktuella kullar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Aktuella kullar',
    }),
    defineField({
      name: 'litters',
      title: 'Kullar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'litter' } }],
    }),
  ],
});
