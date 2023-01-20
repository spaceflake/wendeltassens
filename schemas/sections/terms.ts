import { defineType, defineArrayMember, defineField } from 'sanity';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  name: 'terms',
  title: 'Villkor',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Villkors innehåll',
    }),
    defineField({
      name: 'content',
      title: 'Villkors Innehåll',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Rubrik 1', value: 'h1' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
        }),
      ],
    }),
  ],
});
