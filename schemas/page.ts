import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Sida',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sid Namn',
      description:
        'Namnet på sidan som visas i navigeringen längst upp på hemsidan',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Slutet på adressen som visas efter wendeltassens.se. T.ex. "kontakt" för wendeltassens.se/kontakt',
      type: 'slug',
    }),
    defineField({
      name: 'sections',
      title: 'Sektioner',
      description: 'Sektioner som ska visas på sidan',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'introTextHome' },
            { type: 'textboxBordered' },
            { type: 'postContainer' },
            { type: 'textImageCard' },
            { type: 'kittenSection' },
            { type: 'carousel' },
            { type: 'contactInformation' },
            { type: 'hero' },
            { type: 'section' },
            { type: 'formSection' },
            { type: 'terms' },
          ],
        },
      ],
    }),
  ],
});
