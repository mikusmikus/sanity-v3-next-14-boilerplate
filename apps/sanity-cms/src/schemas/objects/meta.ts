import { defineField, defineType } from 'sanity';

const meta = defineType({
  name: 'meta',
  title: 'Meta',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.custom((description) => {
          if (!description) {
            return 'Required';
          }

          if (description.length > 155) {
            return 'Description should be limited to 155 characters';
          }

          return true;
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default meta;
