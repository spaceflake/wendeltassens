import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { theme } from './theme';
import {
  createSingletonDocumentsIfNotExists,
  singletonDocuments,
} from './cms/singletonDocuments';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(
  singletonDocuments.map((document) => document._id)
);

createSingletonDocumentsIfNotExists();

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
                !singletonDocuments
                  .map((document) => document._id)
                  .includes(listItem.getId()!)
            ),

            ...singletonDocuments.map((document) =>
              S.listItem()
                .title(document.title)
                .id(document._id)
                .child(
                  S.document()
                    .schemaType(document._type)
                    .documentId(document._id)
                )
            ),
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
