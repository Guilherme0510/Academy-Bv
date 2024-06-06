import React from "react"
import './footer.css';
import { Link } from "react-router-dom";


function Footer() {

  return (

  
    
    <footer class="site-footer " id="contato">
      <div class="row justify-content-center text-center">
        <div class="col-lg-2 col-md-4 col-10 logo-footer">
          <a href="#home"><img src="../../../img/logo-com-fundo.jpg" alt="" /></a>
        </div>
        <div class="col-lg-3 col-md-6 col-12 text-white menu-footer">
          <ul class="">
            <h4 class="my-4 title-footer">Menu</h4>
            <li>
              <a href="/#inicio" >Início</a>
            </li>
            <li>
              <a href="/#sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="/#curso">Cursos</a>
            </li>
            <li>
              <a href="/#localizacao">Localização</a>
            </li>
            <li>
              <a href="/#contato">Contato</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-12 text-footer">
          <h4 class="my-4 title-footer">Contatos</h4>
          <p class="mb-1">
            <i class="fa fa-phone mr-2 footer-icon"></i>
            <a href="https://api.whatsapp.com/send?phone=55119140224233">(11) 91402-2423</a>
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-12  text-footer">
          <h4 class="my-4 title-footer">Nosso estúdio</h4>

          <p class="mb-1">
            <i class="fa fa-home mr-2 footer-icon"></i>
            Av. Água Fria, 1588 - Tucuruvi, São Paulo - SP, 02332-001, Brasil
          </p>
        </div>

      </div>
      <div class="text-white pt-5">
        <p class="copyright-text">Desenvolvido por &copy; G M Contact Center </p>
       <p className="copyright-text"><Link to={'https://wa.link/0af5p2'}>(11) 3939-2301</Link></p>
      </div>
    </footer>
  );
}

export default Footer;