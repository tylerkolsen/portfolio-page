function AboutMe() {
  return (
    <section id="about">
      <div id="about-me-page">
        <h3>About Me</h3>
        <h2>Tyler Olsen</h2>
        <div id="content">
            <div id="grid-container">
                <div id="grid-column">
                    <p>First paragraph of text</p>
                    <p>Second paragraph of text</p>
                    <div id="row">
                        <div id="first-col">
                            <p>Birthday</p>
                            <p>Mail</p>
                            <p>LinkedIn</p>
                        </div>
                        <div id="second-col">
                            <p>Degree</p>
                            <p>Skype</p>
                        </div>
                    </div>
                    <div id="second-row">
                        <div id="contact-button">
                            <a href="#contact">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe