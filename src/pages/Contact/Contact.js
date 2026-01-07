import emailjs from "@emailjs/browser";
import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import "./Contact.css";

export const Contact = () => {
  const { t } = useTranslation();
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

    // Verificar que las variables de entorno estén definidas
    const serviceId = process.env.REACT_APP_SERVICE_ID_EMAIL;
    const templateId = process.env.REACT_APP_TEMPLATE_ID_EMAIL;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY_EMAIL;

    if (!serviceId || !templateId || !publicKey) {
      setAlert(t('contact.alerts.error'));
      setLoading(false);
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    try {
      // Preparar los datos para EmailJS
      // Asegurarse de que los nombres de los campos coincidan con la plantilla
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        // También puedes incluir los campos originales por si acaso
        name: values.name,
        email: values.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      if (response.status === 200) {
        setAlert(t('contact.alerts.success'));
        setLoading(false);
        reset();
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
    } catch (error) {
      setAlert(t('contact.alerts.error'));
      setLoading(false);

      setTimeout(() => {
        setAlert("");
      }, 4000);
    }
  };

  return (
    <div className="container ContactSection centerContainColumn">
      <div className="BoxContact">
        <div className="BoxInfo">
          <TitleSection title={t('contact.title')} />
          <ul className="BoxInfo__list">
            <li>
              <i className="bx bx-envelope"></i>
              <a href="mailto:juangonzaleze04@gmail.com">
                juangonzaleze04@gmail.com
              </a>
            </li>
            <li>
              <i className="bx bx-map"></i>
              <a href="https://www.google.com/maps/place/Venezuela" target="_blank" rel="noreferrer">
                Venezuela
              </a>
            </li>
            <li>
              <i className="bx bx-phone"></i>
              <a href="tel:+584145757263">(+58) 414-5757263</a>
            </li>
          </ul>
          <div className="BoxInfo__footer">
            <h5>{t('contact.copyright')}</h5>
          </div>
        </div>
        <form className="FormContact" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="FormContact__description">{t('contact.description')}</h5>
          <div className="FormContact__form-group">
            <input
              className="FormContact__input"
              type="text"
              id="name"
              placeholder={t('contact.name')}
              {...register("name", {
                required: {
                  value: true,
                  message: t('contact.errors.nameRequired'),
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
              placeholder={t('contact.email')}
              {...register("email", {
                required: {
                  value: true,
                  message: t('contact.errors.emailRequired'),
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: t('contact.errors.emailInvalid'),
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
              placeholder={t('contact.message')}
              {...register("message", {
                required: {
                  value: true,
                  message: t('contact.errors.messageRequired'),
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="FormContact__error">
                {errors.message.message}
              </span>
            )}
          </div>
          {alert && (
            <span className="msg-error">{alert}</span>
          )}
          <div className="FormContact__form-group">
            <button className="btn FormContact__btn" type="submit" disabled={loading}>
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
