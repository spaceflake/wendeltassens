import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, //'true' if in production
});
