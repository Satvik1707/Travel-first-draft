import "../styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Company Name</h1>
          <p>Lets you explore the best</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
      </div>
    </div>
  );
};

export default Footer;
