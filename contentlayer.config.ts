import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) => content._raw.flattenedPath,
      type: "string"
    }
  },
  fields: {
    date: {
      required: true,
      type: "date"
    },
    description: {
      required: true,
      type: "string"
    },
    title: {
      required: true,
      type: "string"
    }
  },
  filePathPattern: "blog/**/*.mdx",
  name: "Blog"
}));

export const Code = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) => content._raw.flattenedPath,
      type: "string"
    }
  },
  fields: {
    title: {
      required: true,
      type: "string"
    }
  },
  filePathPattern: "code/**/*.mdx",
  name: "Work"
}));

export const Work = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) => content._raw.flattenedPath,
      type: "string"
    }
  },
  fields: {
    description: {
      required: true,
      type: "string"
    },
    title: {
      required: true,
      type: "string"
    }
  },
  filePathPattern: "work/**/*.mdx",
  name: "Work"
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog]
});
