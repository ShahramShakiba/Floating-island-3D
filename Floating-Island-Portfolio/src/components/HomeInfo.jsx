import shahram from '../assets/Sh.jpg';
const renderContent = {
  1: (
    <>
      <img
        src={shahram}
        alt="Shahram's Image"
        className="w-20 h-20 border rounded-full object-cover shadow-xl opacity-25 hover:opacity-90 transition-opacity duration-300"
      />
      <h1 className="md:text-2xl sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-6 px-8 text-violet-200 mx-5 ">
        Hi, I am <span className="font-semibold ">Shahram.</span>
        <span className="text-blue-300 text-lg block mt-4 mb-2">
          A Frontend Developer 👨‍💻
        </span>
        <p className="border border-gray-400 border-opacity-60 px-4 rounded-md ">
          <span className="md:text-lg sm:text-base">
            React.js, Next.js, Tailwindcss <br />
            Three.js
          </span>
        </p>
      </h1>
    </>
  ),
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const infoBox = ({ text, link, btnText }) => (
  <div className="info-box">{text}</div>
);

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
