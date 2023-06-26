import { textVariant } from './utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';
import { send, sendHover } from './assets';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';



function Contact() {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'YourName', // put your name here.
          from_email: form.email,
          to_email: 'youremail@gmail.com', //put your email here.
          message: form.message,
        },
        'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };
  return (
    <>
    <motion.div variants={textVariant()}>
    <div className='flex flex-col w-full gap-3'>
      <h1 className='text-7xl font-bold text-red-500 '>Get in touch</h1>
      <h2 className='text-white text-5xl'>Contact</h2>
    </div>
  </motion.div>  
  <form ref={formRef} onSubmit={handleSubmit} className="mt-20 flex flex-col gap-6">
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">Your Name</span>
      <input type="text" name="name" value={form.name} onChange={handleChange } placeholder="What's your name?" className="py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none" />
    </label>
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">Your Email</span>
      <input type="email" name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-red-600 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-white 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </>



  );
};

export default SectionWrapper(Contact,'')