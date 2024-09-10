interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '스마트팜 모니터링 플랫폼',
    description: `환경제어, 조명제어, 양액제어, PLC제어`,
    imgSrc: '/static/images/project/main.png',
    href: '/404',
  },
  {
    title: '이동식전원공급장치 모니터링 플랫폼',
    description: `이동식배터리, 선박, 차량, 화재방지, 배터리 상태, 위치`,
    imgSrc: '/static/images/project/bms.jpg',
    href: '/404',
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
