import { Link } from 'react-router-dom';
import shahram from '../assets/Sh.jpg';
import {arrow} from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box w-[34rem]">
    <p className="font-medium sm:text-lg text-center px-6 text-cyan-100">
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
      text="My expertise in leveraging frameworks like (React.js), (Next.js), (Tailwind CSS) and (Three.js) empowers me to develop dynamic, user-centric web applications that substantially maximize user engagement and elevate functionality to new heights."
      link="/about"
      btnText="Learn more about me!"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
