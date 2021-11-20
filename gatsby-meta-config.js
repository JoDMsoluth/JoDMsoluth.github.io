module.exports = {
  title: `JoDMsoluth`,
  description: `JoDMsoluth Blog`,
  author: `조혜형`,
  introduction: `웹과 사람을 연결하는 개발자 조혜형입니다.`,
  siteUrl: `https://JoDMsoluth.github.io/`, // Your blog site url
  social: {
    twitter: `JoDMsoluth`, // Your Twitter account
    github: `JoDMsoluth`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: ``, // Your Facebook account
    linkedin: `혜형-조-a33a921b4`, // Your LinkedIn account
    instagram: ``, // Your Instagram account
  },
  icon: `content/assets/felog.png`, // Add your favicon
  keywords: [`blog`],
  comment: {
    disqusShortName: 'JoDMsoluth', // Your disqus-short-name. check disqus.com.
    utterances: 'JoDMsoluth/JoDMsoluth.github.io', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'jodmsoluth',
  },
  share: {
    facebookAppId: process.env.GATSBY_FACEBOOK_APP_ID, // Add facebookAppId for using facebook share feature v3.2
  },
  ga: process.env.GATSBY_GA_ID, // Add your google analytics tranking ID
  ad: process.env.GATSBY_AD_ID, // Add your google adsense publisherId `ca-pub-xxxxxxxxxx`
}
