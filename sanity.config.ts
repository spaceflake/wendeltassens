import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { theme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['socialLinks']);

export default defineConfig({
  basePath: '/studio',
  name: 'Wendeltassens_studio',
  title: 'Wendeltassens Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'menu',
                  'contactInformation',
                  'formSection',
                  'FAQOverview',
                  'socialLinks',
                  'externalLinks',
                  'matchOverview',
                  'kittenSection',
                  'terms',
                ].includes(listItem.getId()!)
            ),

            S.listItem()
              .title('Meny')
              .id('menu')
              .child(S.document().schemaType('menu').documentId('menu')),

            S.listItem()
              .title('Kontaktuppgifter')
              .id('contactInformation')
              .child(
                S.document()
                  .schemaType('contactInformation')
                  .documentId('contactInformation')
              ),

            S.listItem()
              .title('Kontaktformulär')
              .id('formSection')
              .child(
                S.document().schemaType('formSection').documentId('formSection')
              ),

            S.listItem()
              .title('Frågor & Svar')
              .id('FAQOverview')
              .child(
                S.document().schemaType('FAQOverview').documentId('FAQOverview')
              ),

            S.listItem()
              .title('Externa länkar')
              .id('externalLinks')
              .child(
                S.document()
                  .schemaType('externalLinks')
                  .documentId('externalLinks')
              ),

            S.listItem()
              .title('Sociala medier')
              .id('socialLinks')
              .child(
                S.document().schemaType('socialLinks').documentId('socialLinks')
              ),
            S.listItem()
              .title('Planerade kullar')
              .id('matchOverview')
              .child(
                S.document()
                  .schemaType('matchOverview')
                  .documentId('matchOverview')
              ),
            S.listItem()
              .title('Aktuella kullar')
              .id('kittenSection')
              .child(
                S.document()
                  .schemaType('kittenSection')
                  .documentId('kittenSection')
              ),
            S.listItem()
              .title('Villkors innehåll')
              .id('terms')
              .child(S.document().schemaType('terms').documentId('terms')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  theme: theme,
});
