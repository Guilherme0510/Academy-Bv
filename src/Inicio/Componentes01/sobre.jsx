import React from "react";
import './sobre.css';

function Sobre() {
    return (
        <section className="py-5" id="sobre">
            <div className="linha-branca">
            </div>
            <div className="container pb-5 sobre">
                <div className="dados-sobre">
                    <div className="img-sobre col-md-4">
                        <img src="./img/img-sobre.jpg" alt="img1" className="img-sobre1" />
                    </div>
                    <div className="text-sobre col-md-8 text-white">
                        <div className="titulo-caixa text-center">
                            <h1 className="text-center py-4 mb-2">Sobre Nós</h1>
                            <div className="text-center p-sobre">
                                <p>Fundada com o objetivo de transformar vidas atrás de beleza e estética, inicialmente como um studio e hoje como um centro de referência no treinamento de profissionais.
                                    <br /><br />
                                    Nosso objetivo é a transformação da vida de nossas alunas, para isso buscamos passar todo nosso conhecimento  e experiência.
                                    Nosso foco não é apenas ensinar  de forma mecânica, mas sim de uma forma prática e eficaz passar o passo de nossos métodos, fazendo com que a aluna ao final do curso realmente tenha aprendido tudo e consiga aplicar isso no seu dia a dia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Sobre;