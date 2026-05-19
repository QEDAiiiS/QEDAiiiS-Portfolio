// import { motion } from "motion/react";
import { motion as Motion } from "framer-motion";
import "./hero.css";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="lg:mb-32" id="home">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        {/* //* ================  PICTURE  ================*/}
        <div className="w-full lg:w-1/2 flex justify-end items-center">
          <Motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="home__img flex justify-center
             lg:p-8 lg:justify-end border border-stone-900 rounded-2xl w-96 h-96"
          ></Motion.div>
        </div>

        {/* //* ================  INFORMATION  ================*/}
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className=" w-full lg:w-1/2"
        >
          <div className=" flex flex-col items-center lg:items-start mt-10 pl-4">
            <Motion.h2
              variants={childVariants}
              className=" pb-2 text-4xl tracking-tighter lg:text-7xl"
            >
              Mahmoud Qedais
            </Motion.h2>
            <Motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300
             to-stone-600 bg-clip-text text-4xl tracking-tight 
             text-transparent"
            >
              Frontend Developer
            </Motion.span>
            <Motion.p
              variants={childVariants}
              className="my-4 max-w-lg py-6 text-lg leading-relaxed tracking-tighter"
            >
              Front-End Engineer experienced in building scalable,
              high-performance web applications using React.js, Next.js, and
              TypeScript. Skilled in modern UI/UX design, RESTful API
              integration, responsive design, and web accessibility. Committed
              to writing clean, maintainable code and continuously learning
              emerging technologies.
            </Motion.p>
            <Motion.a
              variants={childVariants}
              href="/MAHMOUD-QEDAIS-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full
               p-3 text-lg text-black "
            >
              Download Resume
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
