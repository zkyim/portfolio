import { defineField, defineType } from "sanity";

export default defineType({
    name: "eductions",
    type: "document",
    title: "Eductions",
    fields: [
      defineField({
        name: "title",
        type: "string",
        title: "Title",
        validation: (Rule) => [
          Rule.required(),
          Rule.min(3).error("A title of min. 10 characters is required"),
          Rule.max(100).error("max 100"),
        ],
      }),
      defineField({
        name: "description",
        type: "text",
        title: "Description",
        validation: (Rule) => Rule.required().min(3).max(1000),
      }),
      defineField({
        name: "date",
        type: "string",
        title: "Date",
        validation: (Rule) => [
          Rule.required(),
          Rule.min(3).error("A title of min. 10 characters is required"),
          Rule.max(100).error("max 100"),
        ],
      }),
    ],
  });