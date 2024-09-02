import emailjs from "@emailjs/browser";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import "./Contact.css";

export const Contact = () => {
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async values => {
    setLoading(true);

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID_EMAIL,
        process.env.REACT_APP_TEMPLATE_ID_EMAIL,
        values,
        process.env.REACT_APP_PUBLIC_KEY_EMAIL
      );
      if (response.status === 200) {
        AlertMessage("success", setAlert("Message sent successfully"));
        setLoading(false);
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
    } catch (error) {
      AlertMessage("error", setAlert(error));
      setLoading(false);

      setTimeout(() => {
        setAlert("");
      }, 4000);
    }
    reset();
  };

  const AlertMessage = text => {
    return <span className="msg-error">{text}</span>;
  };

  return (
    <div className="container ContactSection centerContainColumn">
      <div className="BoxContact">
        <div className="BoxInfo">
          <TitleSection title="Contact" />
          <ul className="BoxInfo__list">
            <li>
              <i className="bx bx-envelope"></i>
              <a href="mailto:juangonzaleze04@gmail.com">
                juangonzaleze04@gmail.com
              </a>
            </li>
            <li>
              <i className="bx bx-map"></i>
              <a href="https://www.google.com/maps/place/Venezuela" target="_blank">
                Venezuela
              </a>
            </li>
            <li>
              <i className="bx bx-phone"></i>
              <a href="tel:+584145757263">(+58) 414-5757263</a>
            </li>
          </ul>
          {/* <div className="BoxInfo__Social">
            <a
              href="https://www.linkedin.com/in/juan-gonzalez-a77b93158/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/juangonzaleze22"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/juangonzaleze/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=765667497"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </div> */}
          <div className="BoxInfo__footer">
            <h5>Copyright © 2022 All Rights Reserved</h5>
          </div>
        </div>
        <form className="FormContact" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="FormContact__description">Drop me a line!</h5>
          <div className="FormContact__form-group">
            <input
              className="FormContact__input"
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            {errors.name && (
              <span className="FormContact__error">{errors.name.message}</span>
            )}
          </div>
          <div className="FormContact__form-group">
            <input
              className="FormContact__input"
              type="text"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email is invalid",
                },
              })}
            />
            {errors.email && (
              <span className="FormContact__error">{errors.email.message}</span>
            )}
          </div>
          <div className="FormContact__form-group">
            <textarea
              className="FormContact__textarea"
              id="message"
              placeholder="Message"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="FormContact__error">
                {errors.message.message}
              </span>
            )}
          </div>
          {AlertMessage(alert)}
          <div className="FormContact__form-group">
            <button className="btn FormContact__btn" type="submit" disabled={loading}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
