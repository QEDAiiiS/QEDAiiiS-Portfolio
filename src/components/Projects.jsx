import { motion as Motion } from "framer-motion";
import CardProject from "./CardProject";

const projects = [
  { src: "RayG.png", name: "RayG", link: "https://ray-g-app-frontend.vercel.app/login" },
  { src: "pro2.png", name: "Al Khan", link: "https://alkhan-inky.vercel.app/" },
  { src: "asas.png", name: "ASAS", link: "https://qedaiiis.github.io/ASAS/" },
  {
    src: "maldiva.png",
    name: "MALDIVA",
    link: "https://qedaiiis.github.io/Maldiva/", 
  },
  {
    src: "plant.png",
    name: "Plant Zone",
    link: "https://qedaiiis.github.io/Plant-Zone/",
  },
  { src: "blog.png", name: "BLOG", link: "https://blog-one-psi-36.vercel.app" },
  { src: "siwqa.png", name: "SIWQA", link: "https://swiqah.vercel.app/" },
  { src: "crud.png", name: "CRUD", link: "https://qedaiiis.github.io/CRUD/" },
  {
    src: "chat.png",
    name: "Chat",
    link: "https://qedaiiis.github.io/Chat-App/",
  },
  {
    src: "blog-details.png",
    name: "Blog Details",
    link: "https://qedaiiis.github.io/Blog-Details/",
  },
    {
    src: "golden.png",
    name: "Golden Line",
    link: "https://golden-line-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className=" pb-4" id="projects">

      <div>

      <Motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" text-center text-4xl mb-10"
      >
        Projects
      </Motion.h2>


<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {projects.map((pro, index) => (
        <CardProject
          key={index}
          src={pro.src}
          name={pro.name}
          link={pro.link}
        />
      ))}

</div>

      </div>
    </div>
  );
};

export default Projects;
