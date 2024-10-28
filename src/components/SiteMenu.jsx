function SiteMenu() {
  return (
    <div id="site-menu" className="fixed right-0 flex w-[57vw] h-[15vh] border-black border-[1px] justify-center items-center bg-white z-10 box-border">
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