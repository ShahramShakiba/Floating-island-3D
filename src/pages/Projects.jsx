import { Link } from 'react-router-dom';
import { projects } from '../Constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

export default function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow-md">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Throughout the years, I've embarked on numerous projects, but these
          are the ones I'm most passionate about. <br />
          Many are open-source, so if something sparks your interest, dive into
          the codebase and share your ideas for enhancements.{' '}
          <span className="text-slate-500 font-semibold">
            Your collaboration would mean a lot!
          </span>
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/*======= details =======*/}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins transform transition-transform duration-300 hover:translate-x-2 w-36">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 "
                >
                  Codebase Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain cursor-pointer"
                />
              </div>

              {project.liveLink && (
                <div className="mt-4 flex items-center gap-2 font-poppins transform transition-transform duration-300 hover:-translate-x-2 w-20">
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-500"
                  >
                    Live Link
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-300" />
      <CTA />
    </section>
  );
}
