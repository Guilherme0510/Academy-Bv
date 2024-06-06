import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header style2" id="inicio">
      <div className="middle-header">
        <div className="row ml-0 mr-0">
          <div className="col-md-4 d-flex flex-column justify-content-around align-items-center">
            <div className="logo">
              <Link to="/" className="navbar-brand"><img src="../../../img/logo-com-fundo.jpg" alt="..." /></Link>
            </div>
            <div className="mobile-nav"></div>
          </div>
          <div className="col-md-8 d-flex flex-row justify-content-center">
            <div className="widget-main d-inline-flex flex-sm-row flex-column">
              <div className="d-flex flex-row justify-content-start align-items-center mt-sm-0 mt-2">
                <a className="btn btn-sigin-whats" href="https://www.instagram.com/studio.beatrizvieira_/"><i class="fa-brands fa-instagram"></i></a>
                <a className="btn btn-sigin-insta" href="https://api.whatsapp.com/send?phone=5511914022423"><i class="fa-brands fa-whatsapp"></i></a>
                <span className="btn-block text-nowrap">
                  <h5><strong className="text-white">Horário de Atendimento</strong></h5>
                  <p className="text-white">Segunda - Sexta das 09:00 &agrave;s 21:00</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`header-inner ${isScrolled ? 'fixed' : ''}`}>
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-12 d-flex flex-row justify-content-center">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu align-items-center justify-content-center">
                      <li className="nav-item">
                        <a href="/#inicio" className="nav-link ">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a href="/#sobre" className="nav-link " >Sobre</a>
                      </li>
                      <li className="nav-item">
                        <a href="/#curso" className="nav-link " >Cursos</a>
                      </li>
                      <li className="nav-item">
                        <a href="/#localizacao" className="nav-link " >Localização</a>
                      </li>
                      <li className="nav-item">
                        <a href="/#contato" className="nav-link " >Contato</a>
                      </li>
                      <li className="nav-item row justify-content-center">
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
