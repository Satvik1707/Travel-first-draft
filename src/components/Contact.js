import "../styles/contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div class="inner-width">
          <h1 class="section-title">Get in touch</h1>
          <div>
            Email Box
          </div>
          <div class="contact-info">
            <div class="item">
              <a href="https://api.whatsapp.com/send?phone=">
                <i class="fa-brands fa-whatsapp"></i>
                +91-9999999999
              </a>
            </div>
            <div class="item">
              <a href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
                @abctag
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
