import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion as Motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div className="lg:h-90 py-10" id="technologies">
      <Motion.h2
       whileInView={{opacity: 1, y: 0}}
       initial={{opacity:0, y: -100}}
       transition={{duration: 1.5}}
       className="text-center text-4xl">Technologies</Motion.h2>


      <Motion.div
      whileInView={{opacity: 1, x: 0}}
      initial= {{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className=" flex flex-wrap items-center justify-center gap-16 mt-15">
        <Motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </Motion.div>
        <Motion.div
                initial="initial"
        animate="animate"
        variants={iconVariants(3)}>
          <TbBrandNextjs className="text-7xl  " />
        </Motion.div>
        <Motion.div
                initial="initial"
        animate="animate"
        variants={iconVariants(5)}>
          <BiLogoTypescript className="text-7xl text-blue-500" />
        </Motion.div>
        <Motion.div
                initial="initial"
        animate="animate"
        variants={iconVariants(2)}>
          <FaNodeJs className="text-7xl text-green-500" />
        </Motion.div>

        <Motion.div
                initial="initial"
        animate="animate"
        variants={iconVariants(6)}>
          <SiExpress className="text-7xl " />
        </Motion.div>

        <Motion.div
                initial="initial"
        animate="animate"
        variants={iconVariants(4)}>
          <SiMongodb className="text-7xl text-green-600" />
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default Technologies;
