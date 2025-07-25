import { motion as Motion } from "framer-motion";

const CardProject = ({ src, name, link }) => {
  return (
    // <div className=" mb-15 grid grid-cols-1 lg:grid-cols-2 w-full lg:max-w-5xl mx-auto ">
    //   <Motion.div
    //     className="max-w-md mx-auto "
    //     whileInView={{ opacity: 1, x: 0 }}
    //     initial={{ opacity: 0, x: -100 }}
    //     transition={{ duration: 1 }}
    //   >
    //     <img src={`./imgs/${src}`} alt="AlKhan" className="w-full" />
    //   </Motion.div>

    //   <Motion.div
    //     whileInView={{ opacity: 1, x: 0 }}
    //     initial={{ opacity: 0, x: 100 }}
    //     transition={{ duration: 1 }}
    //     className=" pt-4 lg:max-w-lg md:w-md "
    //   >
    //     <h3 className="mb-6 font-semibold text-3xl">{name}</h3>
    //     <p className=" mb-6 text-stone-400 ">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
    //       quibusdam laudantium unde, sunt nam recusandae suscipit aliquam
    //       explicabo culpa provident eos, illo odit blanditiis vero. Totam itaque
    //       dolores temporibus magnam?
    //     </p>

    //     <div className=" flex flex-wrap">
    //       <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
    //         React
    //       </span>
    //       <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
    //         Tailwind CSS
    //       </span>
    //       <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
    //         HTML
    //       </span>
    //       <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
    //         CSS
    //       </span>
    //       <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
    //         Firebase
    //       </span>

    //       <a
    //         target="_blank"
    //         href={link}
    //         className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-red-400"
    //       >
    //         Live Demo
    //       </a>
    //     </div>
    //   </Motion.div>
    // </div>

    <Motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center items-center mb-6"
    >
      <div className=" hover:scale-y-110 duration-500 rounded-2xl p-4 border border-stone-700">
        <figure
          className=" group rounded-[4px] relative [transform-style:preserve-3d] will-change-transform
       transition-transform duration-500 hover:[transform:translateZ(5px)_rotateX(-5deg)_rotateY(20deg)] "
        >
          <img
            src={`./imgs/${src}`}
            className=" hover:scale-110 duration-500"
          />

          <div className=" flex justify-between mt-3 group-hover:[transform:translateZ(50px)] duration-500 items-center">
            <figcaption
              className="  text-white  font-bold text-2xl [font-family:monospace]
          "
            >
              {name}
            </figcaption>
            <a
              target="_blank"
              href={link}
              className="mr-2 rounded-xl bg-stone-900 p-2 text-sm font-medium text-red-400"
            >
              Live Demo
            </a>
          </div>
        </figure>
      </div>
    </Motion.div>
  );
};

export default CardProject;
