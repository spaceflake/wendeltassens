import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'formSection',
  title: 'Kontaktformulär',
  description:
    'En sektion med ett kontaktformulär, kontaktuppgifter, och plats för lite text.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Kontaktformulär',
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
