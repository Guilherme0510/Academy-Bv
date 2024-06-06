import React from "react";
import './banner.css';

function Banner() {
  return (

    <section id="">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval='5000'>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="carousel-img"></div>
            <div class="text-banner">
              <h1 class="carousel-title"><b>Desenvolva suas Habilidades</b></h1>
              <p class="carousel-text">Explore nosso currículo diversificado e adquira habilidades essenciais para se destacar na indústria da beleza. Seja a mudança que deseja ver em sua carreira!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-img1"></div>
            <div class="text-banner">
              <h1 class="carousel-title"><b>Aprenda com os Melhores</b></h1>
              <p class="carousel-text">Junte-se a nós e tenha acesso a instrutores experientes, prontos para compartilhar seus segredos e insights valiosos. Prepare-se para uma jornada de aprendizado inspiradora!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-img2"></div>
            <div class="text-banner">
              <h1 class="carousel-title"><b>Cresça Profissionalmente</b></h1>
              <p class="carousel-text">Cada curso oferece uma oportunidade única de aprimorar suas habilidades e avançar em sua carreira. Invista em seu futuro e alcance novos patamares de sucesso.</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-img3"></div>
            <div class="text-banner">
              <h1 class="carousel-title"><b>Conhecimento que Transforma</b></h1>
              <p class="carousel-text">Nossos cursos foram projetados para capacitá-lo com conhecimento prático e atualizado. Prepare-se para uma transformação profissional que abrirá portas para novas oportunidades.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-banner">
        <div className="box-banner">
          <div className="info-box-banner">
            <div>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="text-box-banner">
              <h3>+ de 10 cursos</h3>
              <p>Aqui na Academy BV você encontra mais de 10 cursos na área da beleza para se especializar e encantar as suas clientes!</p>
            </div>
          </div>
        </div>
        <div className="box-banner">
    <div className="info-box-banner">
        <div>
            <i className="fas fa-tools"></i>
        </div>
        <div className="text-box-banner">
            <h3>+ Prática Profissional</h3>
            <p>Aplique seu aprendizado em ambientes reais e esteja preparado para o mercado de trabalho.</p>
        </div>
    </div>
</div>
        <div className="box-banner">
          <div className="info-box-banner">
            <div>
            <i class="fa-solid fa-scroll"></i>
            </div>
            <div className="text-box-banner">
              <h3>+ aprendizado</h3>
              <p>Aqui na Academy BV você encontra uma metodologia de ensino própria e exclusiva feita para garantir seu aprendizado.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Banner;