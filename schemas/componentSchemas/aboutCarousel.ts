import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutCarousel',
  title: 'Karusell',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),

    // Nedan borde vara en array av image eller en array av reference till bilder
    defineField({
      name: 'carouselImage',
      title: 'Karusell bild',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});
