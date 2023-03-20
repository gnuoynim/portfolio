import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const EmailjsComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef<any>();
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_h2it3qq",
        "template_u406e9y",
        form.current,
        "inXwBe6Hl0HEv1Faz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClickSend = () => {
    const emailForm = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const emailBox = document.querySelector(".contact");
    if (name === "") {
      alert("이름을 입력해 주세요");
    } else if (email === "") {
      alert("메일을 입력해 주세요");
    } else if (!emailForm.test(email)) {
      alert("메일 형식으로 작성해주세요");
    } else {
      emailBox?.classList.toggle("on");
    }
  };
  return (
    <>
      <div className="emailBox">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea name="message" maxLength={450} />
          <button
            className="sendButton"
            type="submit"
            value="Send"
            onClick={handleClickSend}
          >
            <div className="altButton">
              <img src="/images/paper-plane.png" />
              <span className="sendText">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default EmailjsComponent;
