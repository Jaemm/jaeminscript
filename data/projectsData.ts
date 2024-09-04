interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '타이틀1',
    description: `간단 글 설명`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: '타이틀2',
    description: `간단 글 설명`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
