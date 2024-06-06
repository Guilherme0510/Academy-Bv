import React from "react";
import Navbar from "./Componentes01/navbar";
import Banner from "./Componentes01/banner";
import Sobre from "./Componentes01/sobre";
import Curso from "./Componentes01/curso";
import Map from "./Componentes01/map";
import Footer from "./Componentes01/footer";


function Site() {

    return (
        <div>
            <Navbar />
            <Banner />
            <Sobre />
            <Curso />
            <Map />
            <Footer />
        </div>


    );
}

export default Site;