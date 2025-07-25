import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaUniversalAccess,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className=" flex shrink-0 items-center w-33">
        <a href="/" aria-label="Home" className=" text-3xl font-bold">
         <img src="./imgs/icon.png" alt="" className="w-full" />
        </a>
      </div>

      {/* //* ================  LINKS  ================*/}
      <div className="m-4 flex items-center justify-center gap-4 text-3xl">
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

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
