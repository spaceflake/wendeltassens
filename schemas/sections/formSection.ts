import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'formSection',
  title: 'Sektion med formulär',
  description:
    'En sektion med ett kontaktformulär, kontaktuppgifter, och plats för lite text.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      description: 'Text som visas tillsammans med formuläret.',
      type: 'text',
    }),
    defineField({
      name: 'contactInformation',
      title: 'Kontaktuppgifter',
      type: 'reference',
      to: [{ type: 'contactInformation' }],
    }),
  ],
});
