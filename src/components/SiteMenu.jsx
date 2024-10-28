function SiteMenu() {
  return (
    <div id="site-menu" className="flex w-[57vw] h-[15vh] border-black border-[1px] justify-self-end justify-center items-center">
        <nav className="">
            <ul className="flex flex-row gap-8">
                <li>
                <a href="#about">About</a>
                </li>
                <li>
                <a href="#services">Services</a>
                </li>
                <li>
                <a href="#resume">Resume</a>
                </li>
                <li>
                <a href="#skills">Skills</a>
                </li>
                <li>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SiteMenu