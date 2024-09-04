# 사용자 정의 MDX 구성 요소를 어떻게 추가할 수 있나요?

다음은 Chart.js에서 도넛 차트를 만들고(종속성이 이미 설치되어 있다고 가정) MDX 게시물에 사용하는 방법에 대한 예입니다.
먼저 `comComponents`에 새로운 `DonutChart.tsx` 구성 요소를 만듭니다.

```tsx
'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ data }) => {
  return <Doughnut data={data} />
}

export default Doughnut
```

기본 `Doughnut` 구성 요소는 React 후크를 사용하므로 `'use client'` 지시어를 추가하여 클라이언트 측 구성 요소임을 지정합니다.
또한 명명된 구성 요소를 사용하지 못하게 하는 기존 문제가 있으므로 해당 구성 요소를 기본 내보내기로 내보내야 합니다.
Next, add the component to `MDXComponents.tsx`:

```diff
...
+ import DonutChart from './DonutChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
+  DonutChart,
  BlogNewsletterForm,
}
```

이제 `.mdx` 파일에서 구성요소를 사용할 수 있습니다.

```mdx
## Example Donut Chart

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
}

<DonutChart data={data} />
```
