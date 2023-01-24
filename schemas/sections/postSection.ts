import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'postContainer',
  title: 'Inlägg sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      description: 'Rubrik som visas på sidan ovanför blogginlägg',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      title: 'Inlägg',
      description:
        'En lista på samtliga blogginlägg som är synliga på hemsidan',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],
});
