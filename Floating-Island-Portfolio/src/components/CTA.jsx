import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Got an idea for a project? {''}
        <br className="md:hidden sm:block" />
        Let's collaborate and bring it to life!
      </p>

      <Link to='/contact' className='btn shadow-xl'>
        Contact Me
      </Link>
    </section>
  );
}
