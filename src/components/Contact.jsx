
function Contact() {
  return (
    <section id="contact">
        <div id="contact-page">Contact
          <h3>Location</h3>
          <h2>Contact Me</h2>
          <div id="content">
            <div id="row">
              <div id="contact-form">
                <form action="">
                  <div id="alert-section"></div>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Name" required />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email" required />
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" required></textarea>
                  <input type="submit" id="send-message" value={"Send Message"} />
                </form>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact