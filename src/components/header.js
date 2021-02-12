import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, BlobHeader } from "./atoms"
import logo from './logo-512x512.png';

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <Link to="/" aria-label="Website logo, go back to homepage.">
	<img src={logo} style={{height:'100px'}}/>
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
        <NavLink to="/" title="Home" selected={activePage === "/"}>
          Home
        </NavLink>
        <NavLink to="/blog" title="Blog" selected={activePage === "blog"}>
          Blog
        </NavLink>
        <NavLink
          to="/projects"
          title="Projects"
          selected={activePage === "projects"}
        >
          Projects
        </NavLink>
        <NavLink to="/about" title="About" selected={activePage === "about"}>
          About
        </NavLink>
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
