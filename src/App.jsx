import SiteMenu from "./components/SiteMenu.jsx"
import SocialButtons from "./components/SocialButtons.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Divider from "./components/Divider.jsx"
import Services from "./components/Services.jsx"
import Resume from "./components/Resume.jsx"
import Skills from "./components/Skills.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Contact from "./components/Contact.jsx"
import MyInfo from "./components/MyInfo.jsx"
import { RxHamburgerMenu } from "react-icons/rx";

function App() {

  return (
    <body className="custom-scrollbar">
      <header>
        <div id="home-logo" className="border-black border-[1px] w-[37vw] mt-11 fixed start-[5vw] box-border">
          <a href="#about" rel="home">
            <img src="work-cartoon.png" className="w-28 h-28" alt="" />
          </a>
        </div>
      </header>
      <SiteMenu />
      <div id="site-menu-toggle" className="fixed right-0 w-[15vw] h-[15vh] flex justify-center items-center z-30">
        <a href=""><RxHamburgerMenu/></a>
      </div>
      <SocialButtons />
      <div id="hero-media" className="h-[100vh] w-[43vw] fixed border-black border-[1px] box-border">
        <div id="owl-carousel">Here is where to look into the owl carousel</div>
        <span id="overlay"></span>
        <span id="loading spinner"></span>
        <div id="content">
          <div id="image"></div>
          <h1>I'm 
            <span>Tyler Olsen</span>
          </h1>
          <div id="animation-div">
            <span id="phrase-1"></span>
            <span id="phrase-2"></span>
            <span id="phrase-3"></span>
          </div>
          <div id="waves">
            <canvas></canvas>
          </div>
        </div>
      </div>
      <div id="content-wrap" className="absolute right-0 w-[57vw] px-[4vw] pb-[14vh] border-black border-[1px]">
        <AboutMe />
        <Divider />
        <Services />
        <Divider />
        <Resume />
        <Divider />
        <Skills />
        <Divider />
        <Portfolio />
        <Divider />
        <Contact />
        <Divider />
        <div id="copyright">Some copyright. Ask about this</div>
      </div>
      <MyInfo />
    </body>
  )
}

export default App
