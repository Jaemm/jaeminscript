interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '스마트팜 모니터링 플랫폼',
    description: `React, Node, AWS`,
    imgSrc: '/static/images/project/smartfarm.png',
    href: '/blog/smartfarm'
  },
  {
    title: '이동식전원공급장치 모니터링 플랫폼',
    description: `React, Node, AWS`,
    imgSrc: '/static/images/project/bms.jpg',
    href: '/blog/bfcs/',
  },
  {
    title: '반도체설비 유독가스 감지, 제어 모니터링',
    description: `VMB, GC, GD`,
    imgSrc: '/static/images/project/fmcs.jpg',
    href: '/404',
  },
  {
    title: '전기차 충전기 키오스크',
    description: `천장형, 멀티형, 키오스크, 전기차 충전기`,
    imgSrc: '/static/images/project/charger.jpg',
    href: '/404',
  },
]

export default projectsData
