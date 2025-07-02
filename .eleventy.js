export default function(eleventyConfig) {
    eleventyConfig.addGlobalData('siteURL', 'nothe.purplellamas.net');
    eleventyConfig.addGlobalData('testURL', 'localhost:8080');
    eleventyConfig.addGlobalData('imageDir', '/img/');

  // Copy `src/style.css` to `_site/style.css`
    eleventyConfig.addPassthroughCopy("src/style.css");
	eleventyConfig.addPassthroughCopy("img/");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough"); //this makes it so it doesn't actually copy the img files, when running with the test server, it just links the direct ones; only when using --serve 

  // Set custom directories for input, output, includes, and data
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
