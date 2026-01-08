import emailjs from "@emailjs/browser";
import { React, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const { t } = useTranslation();
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const boxContactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const alertRef = useRef(null);
  const submitButtonRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const boxElement = boxContactRef.current;
    const infoElement = infoRef.current;
    const formElement = formRef.current;
    
    if (!boxElement || !infoElement || !formElement) return;

    // Establecer estados iniciales
    gsap.set(boxElement, {
      y: 50,
      opacity: 0
    });

    const boxAnimation = gsap.to(boxElement, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: boxElement,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    let infoAnimation = null;
    const infoChildren = infoElement.children;
    if (infoChildren && infoChildren.length > 0) {
      gsap.set(infoChildren, {
        x: -30,
        opacity: 0
      });
      infoAnimation = gsap.to(infoChildren, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoElement,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    let formAnimation = null;
    const formChildren = formElement.children;
    if (formChildren && formChildren.length > 0) {
      gsap.set(formChildren, {
        x: 30,
        opacity: 0
      });
      formAnimation = gsap.to(formChildren, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formElement,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    return () => {
      if (boxAnimation) boxAnimation.kill();
      if (infoAnimation) infoAnimation.kill();
      if (formAnimation) formAnimation.kill();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === boxElement || 
            trigger.trigger === infoElement || 
            trigger.trigger === formElement) {
          trigger.kill();
        }
      });
    };
  }, []);

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
        // Animación de éxito
        if (alertRef.current) {
          gsap.fromTo(alertRef.current, 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
          );
        }
        setTimeout(() => {
          if (alertRef.current) {
            gsap.to(alertRef.current, {
              y: -20,
              opacity: 0,
              duration: 0.3,
              onComplete: () => setAlert("")
            });
          } else {
            setAlert("");
          }
        }, 4000);
      }
    } catch (error) {
      setAlert(t('contact.alerts.error'));
      setLoading(false);
      // Animación de error
      if (alertRef.current) {
        gsap.fromTo(alertRef.current, 
          { y: -20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }
      setTimeout(() => {
        if (alertRef.current) {
          gsap.to(alertRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.3,
            onComplete: () => setAlert("")
          });
        } else {
          setAlert("");
        }
      }, 4000);
    }
  };

  return (
    <div className="container ContactSection centerContainColumn">
      <div ref={boxContactRef} className="BoxContact">
        <div ref={infoRef} className="BoxInfo">
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
        <form ref={formRef} className="FormContact" onSubmit={handleSubmit(onSubmit)}>
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
            <span ref={alertRef} className="msg-error">{alert}</span>
          )}
          <div className="FormContact__form-group">
            <button 
              ref={submitButtonRef}
              className="btn FormContact__btn" 
              type="submit" 
              disabled={loading}
              onMouseEnter={() => {
                if (!loading && submitButtonRef.current) {
                  gsap.to(submitButtonRef.current, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: 'power2.out'
                  });
                }
              }}
              onMouseLeave={() => {
                if (submitButtonRef.current) {
                  gsap.to(submitButtonRef.current, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                  });
                }
              }}
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
