const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");

  eleventyConfig.addCollection("pagesAlpha", (collection) =>
     collection.getFilteredByGlob("poses/*.md").sort((a, b) => {
      if (a.data.title > b.data.title) return -1;
      else if (a.data.title < b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("alphaList", function(collectionApi) {
    return collectionApi.getFilteredByGlob("**/poses/*.md").sort(function(a, b) {
      //return a.date - b.date; // sort by date - ascending
      //return b.date - a.date; // sort by date - descending
      return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });

  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "public"
    }
  }
};