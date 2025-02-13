/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'JaeminScript',
  author: '최재민',
  headerTitle: 'JaeminScript',
  description: '안녕하세요. 3년차 웹 개발자 최재민입니다.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://jaeminscript.vercel.app',
  siteRepo: 'https://github.com/Jaemm',
  siteLogo: '/static/images/logo.jpg',
  // socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'noah00955@gmail.com',
  github: 'https://github.com/Jaemm',
  locale: 'kr',
  analytics: {
    // 분석 제공자를 사용하려면 이를
    // `next.config.js` 파일의 콘텐츠 보안 정책.
    // Plausible, Simple Analytics, Umami, Posthog 또는 Google Analytics를 지원합니다.
    umamiAnalytics: {
      // 우리는 다른 사용자가 우리 분석 ID를 복제하는 것을 방지하기 위해 이 사이트에 env 변수를 사용합니다.
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // 미국에 데이터를 저장하는 경우 스크립트를 덮어써야 할 수도 있습니다. 예:
      // 소스: 'https://us.umami.is/script.js'
      // `next.config.js`에 'us.umami.is'를 CSP에 허용된 도메인으로 추가하는 것을 잊지 마세요.
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // mailchimp, buttondown, klaviyo, revue, emailoctopus 지원
    provider: 'emailoctopus',
  },
  comments: {
    // 분석 제공자를 사용하려면 이를
    // `next.config.js` 파일의 콘텐츠 보안 정책.
    // 공급자를 선택하고 그에 연결된 환경 변수를 사용합니다.
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // 지원되는 옵션: 경로 이름, URL, 제목
      reactions: '1', // 이모티콘 반응: 1 = 활성화 / 0 = 비활성화
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'ko',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // 검색할 문서를 로드하는 경로
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
