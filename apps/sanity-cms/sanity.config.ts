import { documentInternationalization } from '@sanity/document-internationalization';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import deskStructure from './src/desk-structure';
import { schemaTypes } from './src/schemas';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
const dataset = process.env.SANITY_STUDIO_DATASET!;

const languages = [
  { id: 'en', title: 'English', default: true },
  { id: 'es', title: 'Spanish' },
];

const translatableSchemas = ['homePage'];

const templateArray = (): string[] => {
  return translatableSchemas.flatMap((template) =>
    languages.map((lang) =>
      lang.default ? template : `${template}-${lang.id}`
    )
  );
};

export default defineConfig({
  title: 'Riis Bilglass',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: languages,
      languageField: 'locale',
      schemaTypes: translatableSchemas,
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => {
      return prev.filter((template) => !templateArray().includes(template.id));
    },
  },
});
