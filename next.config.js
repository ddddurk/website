const { withContentlayer } = require("next-contentlayer");

/** @type {import("next).NextConfig} */
const config = {
  output: "export"
};

module.exports = withContentlayer(config);
