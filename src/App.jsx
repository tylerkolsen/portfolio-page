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

function App() {

  return (
    <body>
      <header>
        <div id="home-logo" className="border-black border-[1px] w-[37vw] mt-6 fixed start-[5vw]">
          <a href="#about" rel="home">
            <img src="work-cartoon.png" className="w-28 h-28" alt="" />
          </a>
        </div>
      </header>
      <SiteMenu />
      <div id="site-menu-toggle">
        <a href="">Toggle icon</a>
      </div>
      <SocialButtons />
      <div id="hero-media">
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
      <div id="content-wrap">
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
