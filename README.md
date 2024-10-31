# Tailwind Nextjs 블로그

## 특징

Typescript를 사용한 Next.js

## 시작 가이드

1. Clone the repo
2. `siteMetadata.js`(사이트 관련 정보) 개인화
3. 사용하려면 `next.config.js`에서 콘텐츠 보안 정책을 수정하세요.
4. `authors/default.md`(주 작성자) 개인화
5. `projectsData.ts` 수정
6. `headerNavLinks.ts` 를 수정하여 탐색 링크를 맞춤설정하세요.
7. 블로그 게시물 추가
8. Vercel에 배포

## 설치

```bash
yarn
```

Windows를 사용하는 경우 다음을 실행해야 할 수도 있습니다.
```bash
$env:PWD = $(Get-Location).Path
$env:PWD = Get-Location
```

## 개발

먼저 개발 서버를 실행합니다.

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) 브라우저를 사용하여 결과를 확인하세요.
`app` 에서 레이아웃을 수정하거나 `data`에서 콘텐츠를 수정하세요. 
실시간 새로고침을 사용하면 페이지를 편집할 때 페이지가 자동으로 업데이트됩니다.

## 확장 / 사용자 정의

`data/siteMetadata.js` - 사용자의 필요에 따라 수정되어야 하는 대부분의 사이트 관련 정보가 포함되어 있습니다.

`data/authors/default.md` - 기본 작성자 정보(필수). 추가 작성자는 `data/authors`에 파일로 추가할 수 있습니다.

`data/projectsData.js` - 프로젝트 페이지에서 스타일 카드를 생성하는 데 사용되는 데이터입니다.

`data/headerNavLinks.js` - 탐색 링크.

`data/logo.svg` - 자신의 로고로 바꿉니다.

`data/blog` - 자신의 블로그 게시물로 대체합니다.

`공개/정적` - 이미지 및 파비콘과 같은 자산을 저장합니다.

`tailwind.config.js` 및 `css/tailwind.css` - 사이트의 전체적인 모양과 느낌을 변경하기 위해 수정할 수 있는 tailwind 구성 및 스타일시트입니다.

`css/prism.css` - 코드 블록과 관련된 스타일을 제어합니다. 자유롭게 사용자 정의하고 선호하는 prismjs 테마를 사용하세요.

`contentlayer.config.ts` - 사용된 콘텐츠 소스 및 MDX 플러그인 정의를 포함한 Contentlayer 구성입니다.

`comComponents/MDXComponents.js` - 여기에 지정하여 고유한 JSX 코드 또는 React 구성 요소를 전달합니다. 그런 다음 `.mdx` 또는 `.md` 파일에서 직접 사용할 수 있습니다. 기본적으로 사용자 정의 링크, `next/image` 구성 요소, 목차 구성 요소 및 뉴스레터 양식이 전달됩니다.

`레이아웃` - 페이지에 사용되는 기본 템플릿:
- 현재 `PostLayout`, `PostSimple`, `PostBanner`의 3가지 게시물 레이아웃을 사용할 수 있습니다. `PostLayout`은 메타 및 작성자 정보가 포함된 기본 2열 레이아웃입니다. `PostSimple`은 `PostLayout`의 단순화된 버전인 반면, `PostBanner`는 배너 이미지를 제공합니다.
- 블로그 목록 레이아웃에는 2가지가 있습니다. `ListLayout`은 검색 표시줄이 있는 템플릿 버전 1에서 사용되는 레이아웃이고, 현재 버전 2에서 사용되는 `ListLayoutWithTags`는 검색 표시줄을 생략하지만 태그에 대한 정보가 포함된 사이드바를 포함합니다.
  `app` - 라우팅할 페이지입니다.
  `next.config.js` - Next.js와 관련된 구성입니다. 다른 도메인에서 스크립트, 이미지 등을 로드하려면 콘텐츠 보안 정책을 적용해야 합니다.

## Post

콘텐츠는 [Contentlayer](https://www.contentlayer.dev/)를 사용하여 모델링됩니다. 이를 통해 자체 콘텐츠 스키마를 정의하고 이를 사용하여 유형화된 콘텐츠 객체를 생성할 수 있습니다.

### 머리말

Frontmatter는 [Hugo의 기준](https://gohugo.io/content-management/front-matter/)을 따릅니다.
다음 필드가 지원됩니다.

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

다음은 게시물 머리말의 예입니다.

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

## Deploy

**Vercel**  
템플릿을 배포하는 가장 쉬운 방법은 [Vercel](https://vercel.com)에 배포하는 것입니다. 


**Netlify**
[Netlify](https://www.netlify.com/)의 Next.js 런타임 구성은 추가 구성 없이 웹사이트에서 주요 Next.js 기능을 활성화합니다. 
Netlify는 서버 측 렌더링(SSR) 페이지, 증분 정적 재생성(ISR), 'next/images' 등과 같은 Next.js 기능을 처리하는 서버리스 기능을 생성합니다.


**정적 호스팅 서비스 / GitHub Pages / S3 / Firebase etc.**

1. `next.config.js`에 `output: 'export'`를 추가하세요.
2. `next.config.js`에서 `headers()`를 주석 처리합니다.
3. `next.config.js`의 `images` 키에 `unoptimized: true`를 추가하세요.
   또는 'next/image'를 계속 사용하려면 Imgix, Cloudinary 또는 Akamai와 같은 대체 이미지 최적화 공급자를 사용할 수 있습니다.
4. 'api' 폴더와 Newsletter 컴포넌트 등 서버 측 기능을 호출하는 컴포넌트를 제거합니다.
5. `yarn build`를 실행합니다. 생성된 정적 콘텐츠는 'out' 폴더에 있습니다.
6. 'out' 폴더를 선택한 호스팅 서비스에 배포하거나 'npx Serve out'을 실행하여 웹 사이트를 로컬에서 봅니다.
