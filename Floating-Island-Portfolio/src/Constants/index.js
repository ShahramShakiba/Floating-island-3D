import { zur, _3d, food, todo, home, bank } from '../assets/images';
import {
  contact,
  three,
  css,
  blender,
  git,
  github,
  html,
  javascript,
  linkedin,
  firebase,
  mongodb,
  motion,
  nextjs,
  xd,
  photoshop,
  figma,
  react,
  vsCode,
  redux,
  tailwindcss,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React.js',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: three,
    name: 'Three.js',
    type: 'Frontend',
  },
  {
    imageUrl: motion,
    name: 'Framer Motion',
    type: 'Animation',
  },
  {
    imageUrl: blender,
    name: 'Blender',
    type: 'Frontend',
  },

  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: vsCode,
    name: 'Visual Studio Code',
    type: 'Version Control',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: '',
  },
  {
    imageUrl: xd,
    name: 'Adobe XD',
    type: '',
  },
  {
    imageUrl: photoshop,
    name: 'Adobe Photoshop',
    type: '',
  },
  {
    imageUrl: firebase,
    name: 'Firebase',
    type: 'Database',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  // {
  //   imageUrl: typescript,
  //   name: 'TypeScript',
  //   type: 'Frontend',
  // },
];

export const experiences = [
  {
    title: 'Team & Website Management Leader',
    company_name: 'Hotel Zur Au',
    icon: zur,
    iconBg: '#d1e4e4',
    date: 'Jul 2020 - Aug 2021',
    points: [
      "Transformed the hotel's digital footprint by launching an interactive website; increased customer engagement by 40% and boosted online bookings by 20% within the second quarter.",
      "Enhanced user experience and significantly increased engagement through a complete overhaul and restructuring of the restaurant's website.",
      'Coordinated administrative communications and assigned personnel tasks strategically; improved task completion rate by 70% and decreased backlog by 25%.',
      'Monitored and promptly addressed guest reservation inquiries with an outstanding 99% accuracy rate within 24 hours, resulting in a remarkable 20% surge in positive guest feedback.',
      'Slashed response time by 80%, playing a pivotal role in achieving a notable 35% uptick in repeat bookings in just six months.',
      'Managed invoicing process, ensuring on-time delivery and achieving a 98% payment accuracy rate.',
      ' Enhancing the dining experience by consistently creating and updating vibrant food menus on a daily basis to meet evolving customer preferences and maintain customer satisfaction.',
      'Effectively organized and documented 100+ invoices on a monthly basis for both individuals and companies, demonstrating expertise in precision recording and optimizing financial workflows.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/ShahramShakiba',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/shahramshakiba/',
  },
];

export const projects = [
  {
    iconUrl: _3d,
    theme: 'btn-back-red',
    name: '3D Portfolio',
    description:
      'Developed a web application to have an interactive experience where users can engage by moving an Avatar within the 3D environment.',
    link: 'https://github.com/ShahramShakiba/ThreeJS-Portfolio',
  },
  {
    iconUrl: food,
    theme: 'btn-back-green',
    name: 'Next Level Food',
    description:
      'Create and develop a demonstration project focused on a fictional community of food enthusiasts.',
    link: 'https://github.com/ShahramShakiba/NextJS-FoodLovers',
  },
  {
    iconUrl: todo,
    theme: 'btn-back-blue',
    name: 'React Challenges',
    description:
      'Designed and built React Apps to breathe life into the user interface by creating fluid and visually appealing animations that captivate users and elevate their overall experience.',
    link: 'https://github.com/ShahramShakiba/Framer-Motion-Basic',
    liveLink: 'https://framer-motion-challenges-shahram.netlify.app/',
  },

  {
    iconUrl: home,
    theme: 'btn-back-black',
    name: 'Home Smart Landing Page',
    description:
      'Developed a Landing Page in a clean and uncomplicated layout while ensuring the site is responsive to different screen sizes.',
    link: 'https://github.com/ShahramShakiba/HomeSmart-Landing-Page',
    liveLink: 'https://shahramshakiba.github.io/HomeSmart-Landing-Page/',
  },
  {
    iconUrl: bank,
    theme: 'btn-back-yellow',
    name: 'Bank Landing Page',
    description:
      'Developed a Landing Page in a clean and uncomplicated layout while ensuring the site is responsive to different screen sizes.',
    link: 'https://github.com/ShahramShakiba/Bank-Landing-Page',
    liveLink: 'https://shahramshakiba.github.io/Bank-Landing-Page/',
  },
];
