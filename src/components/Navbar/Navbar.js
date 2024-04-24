import React, { useEffect, useState } from 'react';
import "./Navbar.css";

export const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // Función que maneja los cambios observados
    const handleMutation = (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const currentClass = mutation.target.className;
          // Aquí puedes verificar si la clase específica se ha agregado y actuar en consecuencia
          setScroll(currentClass.includes('fp-viewing-2'));
        }
      });
    };

    // Crear una instancia de MutationObserver
    const observer = new MutationObserver(handleMutation);

    // Configurar el observador para el elemento body y el atributo class
    observer.observe(document.body, { attributes: true });

    // Asegúrate de desconectar el observador cuando el componente se desmonte
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`container navbar ${scroll ? 'blur' : ''}`}>
      <h3 className='navbar__NavbarBrand'>Juan Gonzalez</h3>

      <div className='navbar__social'>
        <a href='https://www.linkedin.com/in/juan-gonzalez-a77b93158/' target='_blank' rel="noreferrer">
          <i className='bx bxl-linkedin' ></i>
        </a>
        <a href='https://github.com/juangonzaleze22' target='_blank' rel="noreferrer">
          <i className='bx bxl-github' ></i>
        </a>
        <a href='https://www.instagram.com/juangonzaleze/' target='_blank' rel="noreferrer">
          <i className='bx bxl-instagram' ></i>
        </a>
        <a href='https://www.facebook.com/profile.php?id=765667497' target='_blank' rel="noreferrer">
          <i className='bx bxl-facebook' ></i>
        </a>
      </div>
    </header>
  )
}
