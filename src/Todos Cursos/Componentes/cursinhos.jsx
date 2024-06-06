import React from "react";
import './cursinhos.css';
import { Link } from "react-router-dom";
function Cursinhos() {

    return (
        <section>
            <div className="bg-cursinhos">
                <h1 className="text-center">Cursos</h1>
            </div>
            <div className="linha">
            <img src="../../../img/linha-branca.jpg" alt="" />
            </div>
            <div className="container">
                <div className='head-cursinhos text-center'>
                    <h1><i>Nosso cursinhos</i></h1>
                    <h5>Nossos cursos são montados de acordo com a disponibilidade do aluno, desde que não exceda a carga horária determinada para cada curso.</h5>
                </div>
                <div className="cursinhos ">
                    <div className="item-cursinhos ">
                        <div className='img-cursinhos'>
                            <img src="../../../../img/img-cursinhos.png" alt="" />
                        </div>
                        <div className='content-cursinhos'>
                            <div className='text-cursinhos col-12'>
                                <div className="info-cursinhos col-md-5">
                                    <h3 className='color-black'>Manicure/ pedicure</h3>
                                    <p className='color-black'>Manicure e pedicure é uma profissão que exige conhecimentos técnicos específicos para o cuidado das unhas, sendo esse curso o primeiro passo fundamental para a qualificação profissional de quem quer entrar nesse mundo e oferecer um serviço de qualidade, garantindo a satisfação do cliente e obtendo sucesso em sua carreira.</p>
                                    <Link to={"https://api.whatsapp.com/send?phone=5511914022423&text=Ol%C3%A1!%20Estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20manicure%20/%20pedicure!!"} className="btn btn-cursinhos">Eu Quero</Link>
                                </div>
                                <div className="itens-cursinhos col-md-7">
                                    <ul>
                                        <li>ANATOMIA DAS UNHAS E CUIDADOS BÁSICOS</li>
                                        <li>HIGIENIZAÇÃO E ESTERILIZAÇÃO DE MATERIAIS</li>
                                        <li>TÉCNICAS DE CORTE, LIXAMENTO E POLIMENTO</li>
                                        <li>REMOÇÃO E TRATAMENTO DE CUTÍCULAS</li>
                                        <li>APLICAÇÃO DE ESMALTES E TÉCNICAS DE PINTURA</li>
                                        <li>UNHAS DE GEL, ACRÍLICAS E FIBRA DE VIDRO</li>
                                        <li>MANICURE E PEDICURE MASCULINA</li>
                                        <li>SPA DOS PÉS E DAS MÃOS: TÉCNICAS DE RELAXAMENTO</li>
                                        <li>NAIL ART BÁSICA: DESENHOS E ADESIVOS</li>
                                        <li>ATENDIMENTO AO CLIENTE E DICAS PARA O SUCESSO PROFISSIONAL</li>
                                        <li>QUALIFICAÇÃO PROFISSIONAL</li>
                                        <li>E MUITO MAIS!</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="item-cursinhos ">
                        <div className='img-cursinhos'>
                            <img src="../../../../img/img-cursinhos2.png" alt="" />
                        </div>
                        <div className='content-cursinhos'>
                            <div className='text-cursinhos col-12'>
                                <div className="info-cursinhos col-md-5">
                                    <h3 className='color-black'>Extensão de Cílios</h3>
                                    <p className='color-black'>Muito procurado na atualidade, a Extensão de Cílios é um procedimento que visa aumentar o volume dos fios e dar a aparência de está sempre maquiada, garantindo um olhar marcante, além de disfarçar algumas imperfeições, como flacidez nas pálpebras. <br />
                                        Por ser uma opção mais natural do que os cílios postiços, a extensão tem conquistado cada vez mais o mercado, sendo assim, um procedimento muito lucrativo, cada vez mais tendência no mercado da beleza.
                                        Nosso curso é composto por aulas teóricas e práticas, onde o aluno (a) aprenderá as seguintes técnicas</p>
                                    <Link to={"https://api.whatsapp.com/send?phone=5511914022423&text=Ol%C3%A1!%20Estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20extens%C3%A3o%20de%20c%C3%ADlios!!"} className="btn btn-cursinhos">Eu Quero</Link>
                                </div>
                                <div className="itens-cursinhos col-md-7">
                                    <ul>
                                        <li>LASH LIFTING</li>
                                        <li>HIGIENIZAÇÃO E ESTERILIZAÇÃO DE MATERIAIS</li>
                                        <li>FIO A FIO</li>
                                        <li>VOLUME BRASILEIRO </li>
                                        <li>VOLUME EGÍPCIO</li>
                                    </ul>
                                    <p>Nossos cursos são certificados e destinam-se a todos os interessados, mesmo sem nenhuma experiência na área, nosso curso te ensinará de forma prática o passo a passo para se tornar uma Extensionista profissional.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="cursinhos ">
                    <div className="item-cursinhos ">
                        <div className='img-cursinhos'>
                            <img src="../../../../img/img-cursinhos3.png" alt="" />
                        </div>
                        <div className='content-cursinhos'>
                            <div className='text-cursinhos col-12'>
                                <div className="info-cursinhos col-md-5">
                                    <h3 className='color-black'>Nail designer </h3>
                                    <p className='color-black'>O alongamento de unhas já é tendência e existe várias tipos de técnicas diferentes, visando agradar vários gostos diferentes, desde aquela unha mais longa á aquela mais curtinha ou mais arredondada, cada modelo é uma técnica diferente.
                                        No nosso curso de Alongamento de Unhas, você aprenderá 3 técnicas</p>
                                    <Link to={"https://api.whatsapp.com/send?phone=5511914022423&text=Ol%C3%A1!%20Estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20nail%20designer!!"} className="btn btn-cursinhos">Eu Quero</Link>
                                </div>
                                <div className="itens-cursinhos col-md-7">
                                    <ul>
                                        <li>FIBRA DE VIDRO</li>
                                        <li>ALONGAMENTO EM GEL</li>
                                        <li>GEL NA TIPS</li>
                                    </ul>
                                    <p>Sendo essas as técnicas mais procuradas no mercado, através de nosso curso, você aprenderá de forma prática o passo a passo para se tornar uma mail designer, mesmo sem experiência na área.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="item-cursinhos ">
                        <div className='img-cursinhos'>
                            <img src="../../../../img/img-cursinhos4.png" alt="" />
                        </div>
                        <div className='content-cursinhos'>
                            <div className='text-cursinhos col-12'>
                                <div className="info-cursinhos col-md-5">
                                    <h3 className='color-black'>Maquiagem</h3>
                                    <p className='color-black'>No Curso de Maquiagem Profissional você aprenderá, passo a passo, as etapas de preparação da pele e aplicação completa da maquiagem, em diferentes formatos de rosto e tipos de pele.
                                        <br /><br />
                                        Nas aulas práticas, você terá a oportunidade de dominar truques e técnicas de maquiagem profissional que vão desde o nível fundamental até o mais avançado.
                                    </p>
                                    <Link to={"https://api.whatsapp.com/send?phone=5511914022423&text=Ol%C3%A1!%20Estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20maquiagem!!"} className="btn btn-cursinhos">Eu Quero</Link>
                                </div>
                                <div className="itens-cursinhos col-md-7">
                                    <h5>Iniciando a Arte de Maquiar</h5>
                                    <ul>
                                        <li>POSTURA PROFISSISONAL</li>
                                        <li>PRODUTOS INDISPENSÁVEIS E TUDO SOBRE PINCÉIS</li>
                                        <li>COMBINAÇÃO DE CORES E SOMBRAS</li>
                                        <li>A IMPORTÂNCIA DE ASSEPSIA E OS TIPOS DE PELE</li>
                                        <li>TIPOS DE UNIFORMIZAÇÃO DE PELES (BASES E AS SUAS TEXTURAS)</li>
                                        <li>COMO AUMENTAR E DIMINUIR OS OLHOS</li>
                                        <li>TIPOS DE BLUSHES (COMPACTO, CREMOSO, MINERAL E TERRACOTA)</li>
                                        <li>CORREÇÃO DOS LÁBIOS, OLHEIRAS E MANCHAS</li>
                                        <li>CÍLIOS POSTIÇOS E COLOCAÇÕES</li>
                                        <li>TIPOS DE CORRETIVOS E COMO USÁ-LOS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default Cursinhos;