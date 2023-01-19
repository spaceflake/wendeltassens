import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'FAQOverview',
  title: 'Frågor & Svar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Frågor & Svar',
    }),
    defineField({
      name: 'faqs',
      title: 'Frågor & Svar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'faq' } }],
    }),
  ],
});
