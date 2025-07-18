import { motion as Motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" pb-4 w-full" id="projects">
      <Motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" text-center text-4xl mb-22"
      >
        Projects
      </Motion.h2>

      <div className=" mb-8 flex flex-wrap gap-20 lg:justify-center">
        <Motion.div
          className="w-full lg:w-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./imgs/pro1.png"
            alt="AlKhan"
            className="mb-6 rounded-2xl w-full"
          />
        </Motion.div>

        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-6 font-semibold text-3xl">Al Khan</h3>
          <p className=" mb-6 text-stone-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            quibusdam laudantium unde, sunt nam recusandae suscipit aliquam
            explicabo culpa provident eos, illo odit blanditiis vero. Totam
            itaque dolores temporibus magnam?
          </p>

          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            HTML
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            CSS
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            React
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            Firebase
          </span>
        </Motion.div>
      </div>

            <div className=" mb-8 flex flex-wrap gap-20 lg:justify-center">
        <Motion.div
          className="w-full lg:w-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./imgs/pro1.png"
            alt="AlKhan"
            className="mb-6 rounded-2xl w-full"
          />
        </Motion.div>

        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-6 font-semibold text-3xl">Al Khan</h3>
          <p className=" mb-6 text-stone-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            quibusdam laudantium unde, sunt nam recusandae suscipit aliquam
            explicabo culpa provident eos, illo odit blanditiis vero. Totam
            itaque dolores temporibus magnam?
          </p>

          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            HTML
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            CSS
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            React
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            Firebase
          </span>
        </Motion.div>
      </div>

            <div className=" mb-8 flex flex-wrap gap-20 lg:justify-center">
        <Motion.div
          className="w-full lg:w-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./imgs/pro1.png"
            alt="AlKhan"
            className="mb-6 rounded-2xl w-full"
          />
        </Motion.div>

        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-6 font-semibold text-3xl">Al Khan</h3>
          <p className=" mb-6 text-stone-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            quibusdam laudantium unde, sunt nam recusandae suscipit aliquam
            explicabo culpa provident eos, illo odit blanditiis vero. Totam
            itaque dolores temporibus magnam?
          </p>

          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            HTML
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            CSS
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            React
          </span>
          <span className="mr-2 rounded-2xl bg-stone-900 p-2 tex-sm font-medium text-stone-300">
            Firebase
          </span>
        </Motion.div>
      </div>


    </div>
  );
};

export default Projects;
