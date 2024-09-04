# Github 페이지에 어떻게 배포하나요?

1. 기본 README에서 정적 빌드 생성에 대한 섹션을 따르고 로컬에서 테스트하여 작동하는지 확인합니다.
2. `next.config.js`에 저장소 이름과 일치하도록 기본 경로를 지정합니다. `basePath: "/tailwind-nextjs-starter-blog"`.
3. 이미지 소스에 대한 올바른 기본 경로를 사용하도록 `comComponent/Image.tsx`를 수정합니다.

   ```tsx
   import NextImage, { ImageProps } from 'next/image'

   const Image = ({ src, ...rest }: ImageProps) => (
     <NextImage src={`/tailwind-nextjs-starter-blog${src}`} {...rest} />
   )

   export default Image
   ```

4. 배포를 자동화하기 위해 사용할 수 있는 Github 작업은 다음과 같습니다.

```yml
# Next.js 사이트를 GitHub 페이지에 구축하고 배포하기 위한 샘플 워크플로
#
# Next.js를 시작하려면 다음을 참조하세요: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # 기본 분기를 대상으로 하는 푸시에서 실행됩니다.
  push:
    branches: ['test-gh-pages-static']

  # 작업 탭에서 이 워크플로를 수동으로 실행할 수 있습니다.
  workflow_dispatch:

# GitHub 페이지에 배포할 수 있도록 GITHUB_TOKEN의 권한을 설정합니다.
permissions:
  contents: read
  pages: write
  id-token: write

# 진행 중인 실행과 최근 대기 중인 실행 사이에 대기 중인 실행을 건너뛰고 동시 배포를 하나만 허용합니다.
# 그러나 이러한 프로덕션 배포가 완료되도록 하려면 진행 중인 실행을 취소하지 마십시오.
concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  # 작업 구축
  build:
    name: Build Nextjs Blog
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Restore cache
        uses: actions/cache@v3
        with:
          path: |
            .next/cache
          # 패키지나 소스 파일이 변경될 때마다 새 캐시를 생성합니다.
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # 소스 파일은 변경되었지만 패키지는 변경되지 않은 경우 이전 캐시에서 다시 빌드하세요.
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build project assets
        run: ${{ steps.detect-package-manager.outputs.manager }} build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  # 배포 작업
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
