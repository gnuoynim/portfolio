import EmailjsComponent from "./emailjs-component";

const ContactComponent = () => {
  const handleClickToggle = () => {};
  return (
    <div className="contact">
      <p>Contact Me</p>
      <div>
        <EmailjsComponent />
        <div className="information">
          <p>Info</p>
          <ul>
            <li>
              <span>E-mail</span>
              <span>arome0825@naver.com</span>
            </li>
            <li>
              <span>Phone</span>
              <span>010-5191-6985</span>
            </li>
            <li>
              <span>Address</span>
              <span>도봉구 쌍문동</span>
            </li>
          </ul>
          <p className="thank">Thank you</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
