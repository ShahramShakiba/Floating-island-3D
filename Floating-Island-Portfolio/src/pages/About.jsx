import { skills } from '../Constants';

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{' '}
        <span className="blue-gradient_text font-semibold drop-shadow-md">
          Shahram.
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend Developer specializing in utilizing frameworks like React.js,
          Next.js, Tailwind CSS, and particularly Three.js to create dynamic,
          user-centric web applications.
        </p>
      </div>

      {/*======= Skills =======*/}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*======= Work Experience =======*/}
      <div className="py-24">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've had the pleasure of working with some companies, boosting my skills and teaming up with smart people. Here's the scoop:
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
}
