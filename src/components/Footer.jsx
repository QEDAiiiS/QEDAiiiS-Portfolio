import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaUniversalAccess,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t h-52 mt-7  rounded-t-3xl">
      <div className=" text-center container mx-auto">
        <h1 className=" text-4xl py-7">QEDAiiiS</h1>

        <div className=" space-x-9">
          <a href="home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="m-4 flex items-center justify-center gap-10 text-3xl">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/mahmoud-qedais-683969212?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqamomvDhQ8G2Kw125VVwZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/QEDAiiiS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
