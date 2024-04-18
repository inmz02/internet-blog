/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div className="w-full bg-[#eeeeee] border border-t-white border-b-[#c5c5c5] p-1 md:flex gap-2 md:flex-wrap text-xxs myNav2 justify-center md:justify-start grid grid-cols-3 sm:border">
      <Link to="/">
        <img
          src="https://64.media.tumblr.com/614669af3d9d7a8d5a5782dc1c727c87/7cf915f60095705b-65/s75x75_c1/5a2d64d242e8b71290836df9e36ebc2d5896c6b2.gif"
          className="w-3 h-fit"
        />
        Home
      </Link>
      <Link to="/about-the-webmaster">
        <img
          src="https://64.media.tumblr.com/tumblr_meb714keZf1qdlkyg.gif"
          className="w-3 h-fit"
        />
        About Webmaster
      </Link>
      <Link to="/my-journal">
        <img
          src="https://64.media.tumblr.com/aeafa75e9c70ee4b71fad670d55dd719/0a7073676d05029e-43/s75x75_c1/8c49c1824ab05f43440de0620241c1864a718adb.gifv"
          className="w-3 h-fit"
        />
        Journal
      </Link>
      <Link to="/programming">
        <img
          src="https://64.media.tumblr.com/fe1fac4fb32ff51bae68e1f475d6bf88/tumblr_inline_mg0p03F9E81qdlkyg.gif"
          className="w-3 h-fit"
        />
        Programming
      </Link>
      <Link to="/lord-jesus">
        <img
          src="https://64.media.tumblr.com/tumblr_m3j3x0f0yd1qdlkyg.gif"
          className="w-3 h-fit"
        />
        Lord Jesus
      </Link>
      <Link to="/philosphy">
        <img
          src="https://64.media.tumblr.com/b90763cb84f32d3a2b4fa5dcbf059540/7cf915f60095705b-65/s75x75_c1/5641b6064fa659676816e5bcf9068dbe8ffda170.gif"
          className="w-3 h-fit"
        />
        Philosophy
      </Link>
    </div>
  );
};

export default NavBar2;
