module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/css');
  eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
  eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      layouts: '_layouts',
      output: 'dist'
    }
  }
}
