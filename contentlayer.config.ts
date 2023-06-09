import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import moonlitII from "./assets/moonlit-ii.json";

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
    isDraft: {
      required: false,
      type: "boolean"
    },
    title: {
      required: true,
      type: "string"
    }
  },
  contentType: "mdx",
  filePathPattern: "blog/**/*.mdx",
  name: "Blog"
}));

export const Code = defineDocumentType(() => ({
  contentType: "mdx",
  fields: {
    title: {
      required: true,
      type: "string"
    }
  },
  filePathPattern: "code/**/*.mdx",
  name: "Code"
}));

export const Work = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) => content._raw.flattenedPath,
      type: "string"
    }
  },
  contentType: "mdx",
  fields: {
    description: {
      required: true,
      type: "string"
    },
    isFeatured: {
      required: false,
      type: "boolean"
    },
    name: {
      required: false,
      type: "string"
    },
    title: {
      required: true,
      type: "string"
    },
    url: {
      required: true,
      type: "string"
    }
  },
  filePathPattern: "work/**/*.mdx",
  name: "Work"
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog, Code, Work],
  mdx: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank"
        }
      ],
      [
        rehypePrettyCode,
        {
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          theme: moonlitII
        }
      ],
      rehypeSlug,
      rehypeAutolinkHeadings
    ]
  }
});
