# `kbar` 검색을 어떻게 사용자 정의할 수 있나요?

아래와 같은 `SearchProvider` 구성 요소를 추가하고 `app/layout.tsx`의 기본 `SearchProvider` 구성 요소 대신 사용합니다.

`defaultActions`는 초기 작업 목록입니다.

'onSearchDocumentsLoad'는 'searchDocumentsPath'로 지정된 문서가 로드될 때 호출되는 콜백 함수입니다.
동적으로 로드된 검색 기능을 비활성화하려면 `searchDocumentsPath`를 `false`로 설정하세요.

```tsx
'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h', 'h'],
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Home',
            perform: () => router.push('/projects'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
```

생성된 전체 블로그 콘텐츠에 대해 전체 텍스트 검색을 수행하도록 선택할 수도 있지만,
`contentlayer.config.ts`의 `createSearchIndex` 기능을 다음과 같이 수정하면 더 큰 검색 색인 파일을 희생하게 됩니다.

```tsx
function createSearchIndex(allBlogs) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify((sortPosts(allBlogs)))
    )E
    console.log('Local search index generated...')
  }
}
```

`JSON.stringify(allCoreContent(sortPosts(allBlogs)))`에서 `JSON.stringify((sortPosts(allBlogs)))`로의 변경 사항에 유의하세요.

다음으로, 수정된 `SearchProvider`에서 원시 콘텐츠를 `onSearchDocumentsLoad` 소품의 `keywords` 필드에 덤프합니다.

```tsx
onSearchDocumentsLoad(json) {
  return json.map((post: Blog) => ({
    id: post.path,
    name: post.title,
    keywords: post.body.raw,
    section: 'Blog',
    subtitle: post.tags.join(', '),
    perform: () => router.push('/' + post.path),
  }))
}
```
