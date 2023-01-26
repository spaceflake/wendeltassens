import { client } from '../lib/sanity.client';

export const singletonDocuments = [
  {
    _id: 'menu',
    _type: 'menu',
    title: 'Meny',
  },
  {
    _id: 'contactInformation',
    _type: 'contactInformation',
    title: 'Kontaktuppgifter',
  },
  {
    _id: 'formSection',
    _type: 'formSection',
    title: 'Kontaktformulär',
  },
  {
    _id: 'FAQOverview',
    _type: 'FAQOverview',
    title: 'Frågor & Svar',
  },
  {
    _id: 'socialLinks',
    _type: 'socialLinks',
    title: 'Sociala medier',
  },
  {
    _id: 'externalLinks',
    _type: 'externalLinks',
    title: 'Externa länkar',
  },
  {
    _id: 'matchOverview',
    _type: 'matchOverview',
    title: 'Planerade kullar',
  },
  {
    _id: 'kittenSection',
    _type: 'kittenSection',
    title: 'Aktuella kullar',
  },
];

export function createSingletonDocumentsIfNotExists() {
  singletonDocuments.map((document) => client.createIfNotExists(document));
}
