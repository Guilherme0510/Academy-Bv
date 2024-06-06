import React from "react";
import './curso.css';
import { Link } from "react-router-dom";


function Curso() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <section className=" py-5" id="curso">
            <div className="text-center">
                <h1 className="pb-2">Nossos Cursos</h1>
                <h6><i>Nossos cursos são montados de acordo com a disponibilidade do aluno <br /> desde que não exceda a carga horária determinada para cada curso.</i></h6>
                <div className="linha">
            <img src="../../../img/linha-branca.jpg" alt="" />
            </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="cursos-home col-12">
                        <div className="box-cursos col-md-6">
                            <div className="box-cursos-img1"></div>
                            <div className="box-cursos-info">
                                <h3 className="text-center">EXTENSÃO DE CÍLIOS</h3>
                                <p>Muito procurado na atualidade, a Extensão de Cílios é um procedimento que visa aumentar o volume dos fios e dar a aparência de está sempre maquiada, garantindo um olhar marcante, além de disfarçar algumas imperfeições, como flacidez nas pálpebras.</p>
                            </div>
                            <Link className="btn link-mais" to={'cursos'} onClick={scrollToTop}>Saiba Mais</Link>
                        </div>
                        <div className="box-cursos col-md-6">
                            <div className="box-cursos-img2"></div>
                            <div className="box-cursos-info">
                                <h3 className="text-center">NAIL DESIGNER</h3>
                                <p>O alongamento de unhas já é tendência e existe várias tipos de técnicas diferentes, visando agradar vários gostos diferentes, desde aquela unha mais longa á aquela mais curtinha ou mais arredondada, cada modelo é uma técnica diferente.
                                </p>
                            </div>
                            <Link className="btn link-mais" to={'cursos'} onClick={scrollToTop}>Saiba Mais</Link>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Curso;