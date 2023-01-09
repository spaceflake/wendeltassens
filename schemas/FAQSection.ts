import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'FAQSection',
  title: 'Frågor och svar Sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'Frågor och svar',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'faq' } }],
    }),
  ],
});
