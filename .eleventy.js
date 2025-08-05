import { feedPlugin } from "@11ty/eleventy-plugin-rss";
let siteURL = 'https://nothe.purplellamas.net'

export default function(eleventyConfig) {
    eleventyConfig.addGlobalData('siteURL', siteURL);
    eleventyConfig.addGlobalData('imageDir', '/img/');

  // Copy `src/style.css` to `_site/style.css`
    eleventyConfig.addPassthroughCopy("src/style.css");
	eleventyConfig.addPassthroughCopy("img/");
//    eleventyConfig.setServerPassthroughCopyBehavior("passthrough"); //this makes it so it doesn't actually copy the img files, when running with the test server, it just links the direct ones; only when using --serve 
 
 // rss feed genration
   eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "blog", // iterate over `collections.blog`
            limit: 10,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "Musings And Mumblings",
            subtitle: "The personal blog of Rachael Worthington. Covers slice of life, crafting, plants, and whatever has caught my attention that day!",
            base: siteURL,
            author: {
                name: "Rey",
            }
        }
    });

    // Filters
    
	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target)
	});

	eleventyConfig.addFilter("filterTags", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "blog"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);

	eleventyConfig.addShortcode('excerpt', extractExcerpt);

	function extractExcerpt(post) {
		if(!post.templateContent) return '';
		if(post.templateContent.indexOf('</p>') > 0) {
			let end = post.templateContent.indexOf('</p>');
			return post.templateContent.substr(0, end+4);
		}
		return post.templateContent;
	}


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
