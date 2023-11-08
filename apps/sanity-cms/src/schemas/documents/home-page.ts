import { defineField, defineType } from 'sanity';

import { imageField } from '../fields/image';

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    defineField({
      name: 'meta',
      type: 'meta',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'object',
      group: 'main',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          options: {
            layout: 'tags',
          },
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  ...imageField,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us',
      type: 'object',
      group: 'main',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          ...imageField,
          name: 'primaryImage',
          title: 'Primary Image',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          ...imageField,
          name: 'secondaryImage',
          title: 'Secondary Image',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      group: 'main',
      validation: (Rule) => Rule.required().max(2),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              ...imageField,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'locale',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
});

export default homePage;
