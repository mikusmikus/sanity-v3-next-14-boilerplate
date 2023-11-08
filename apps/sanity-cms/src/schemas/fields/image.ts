import { defineField } from 'sanity';

export const imageField = {
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
};
