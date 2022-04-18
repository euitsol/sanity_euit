export default {
  name: 'course_product',
  title: 'Course_Product',
  type: 'document',
  fields: [
    {
      name: 'course_name',
      title: 'Course Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'course_price',
      title: 'Course Price',
      type: 'number',
    },
    {
      name: 'course_duration',
      title: 'Course Duration',
      type: 'number',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'course_name',
        maxLength: 96,
      },
    },

    // {
    //   name: 'module',
    //   title: 'Module',
    //   type: 'string',
    // },
  ],
};
