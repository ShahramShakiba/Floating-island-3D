import { Link } from 'react-router-dom';
import shahram from '../assets/Sh.jpg';
import { arrow } from '../assets/icons';

const InfoBox = ({ title, text, link, btnText }) => (
  <div className="info-box w-[32rem]">
    <p className="font-medium sm:text-lg text-center bg-purple-800 rounded-full w-1/3 mx-auto">
      {title}
    </p>
    <p className="font-medium sm:text-lg text-center px-4 text-cyan-100">
      {text}
    </p>
    <Link to={link} className="neo-brutalism-white neo-btn ">
      {btnText}
      <img src={arrow} alt="Arrow right" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <>
      <img
        src={shahram}
        alt="Shahram's Image"
        className="w-20 h-20 border rounded-full object-cover shadow-xl opacity-25 hover:opacity-90 transition-opacity duration-300"
      />
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-6 px-8 text-violet-200 mx-5 ">
        Hi, I am <span className="font-semibold ">Shahram.</span>
        <span className="text-blue-300 text-lg block mt-4 mb-2">
          A Frontend Developer
        </span>
        <p className="border border-gray-400 border-opacity-60 px-4 rounded-md ">
          <span className="sm:text-base">
            React.js, Next.js, Tailwindcss <br />
            Three.js
          </span>
        </p>
      </h1>
    </>
  ),
  2: (
    <InfoBox
      title="About Me"
      text="My expertise in React.js, Next.js, Tailwind CSS and Three.js  drives dynamic, user-centric web apps, maximizing engagement and functionality."
      link="/about"
      btnText="Learn More About Me!"
    />
  ),
  3: (
    <InfoBox
      title="Projects"
      text="Discover my Frontend projects, each illustrating unique challenges and solutions, showcasing my commitment to quality and innovation."
      link="/projects"
      btnText="View My Work"
    />
  ),
  4: (
    <InfoBox
      title="Contact Me"
      text="Seeking a project developer? I'm here, ready to surpass expectations!"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
