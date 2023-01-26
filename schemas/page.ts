import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Sida',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Innehåll',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Sid Namn',
      description:
        'Namnet på sidan som visas i navigeringen längst upp på hemsidan',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Slutet på adressen som visas efter wendeltassens.se. T.ex. "kontakt" för wendeltassens.se/kontakt',
      type: 'slug',
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sektioner',
      description: 'Sektioner som ska visas på sidan',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'introTextHome' },
            { type: 'textboxBordered' },
            { type: 'postContainer' },
            { type: 'kittenSection' },
            { type: 'carousel' },
            { type: 'contactInformation' },
            { type: 'hero' },
            { type: 'section' },
            { type: 'formSection' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beskrivning',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Nyckelord',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Bild',
      type: 'image',
      group: 'seo',
    }),
  ],
});
