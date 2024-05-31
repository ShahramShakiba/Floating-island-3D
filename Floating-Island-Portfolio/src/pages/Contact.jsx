import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
import Loader from '../components/Loader';

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit'); //fox-running

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Shahram',
          from_email: form.email,
          to_email: 'shahramshakibaa@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        //after sending the message
        setIsLoading(false);
        //show success msg
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        });

        setTimeout(() => {
          //hide an success alert
          hideAlert();
          setCurrentAnimation('idle');
          //clear the form
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        //show error msg
        showAlert({
          show: true,
          text: 'I did not receive your message!',
          type: 'danger',
        });
        console.log(error);
      });
  };

  //is called once user clicked on input to track the fox
  const handleFocus = () => setCurrentAnimation('walk');
  //is called once user clicked out
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={5}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn shadow-lg"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.3} />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.65, 0]}
              scale={[0.53, 0.53, 0.53]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
