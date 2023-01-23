/* eslint-disable no-process-env */
import { loadEnvConfig } from '@next/env';
import { defineCliConfig } from 'sanity/cli';

var dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

var projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
var dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
