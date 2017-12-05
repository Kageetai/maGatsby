module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogPostSort: "date", // which field on the post to sort by
  blogPageSize: 5, // size of pages of blog posts
  dateFormatInput: "YYYY-MM-DD", // date format to use for parsing from source
  dateFormatOutput: "LL", // date format to use for output/rendering, see http://momentjs.com/docs/#/displaying/format/
  siteTitle: "Kageetai.net", // Site title.
  siteTitleAlt: "maBlog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://kageetai.net", // Domain of your website without pathPrefix.
  pathPrefix: "/", // (Folder-)Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/. Only set when actually deploying to a subfolder or so, because otherwise config breaks.
  siteDescription: "A blog for my personal projects.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "152804634760737", // FB Application ID for using app insights
  googleAnalyticsID: "UA-12320225-1", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "generic", // Default category for posts.
  userName: "Kageetai", // Username to display in the author segment.
  userTwitter: "kageetai", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Barcelona, Spain", // User location to display in the author segment.
  userAvatar: "https://s.gravatar.com/avatar/c2444d064665b19ed31e3e69570e6581?s=80", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/kageetai",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/kageetai",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:ma@kageetai.net",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Kageetai.net", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
