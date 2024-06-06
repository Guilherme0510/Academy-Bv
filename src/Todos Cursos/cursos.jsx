import React from "react";

import Navbar from "../Inicio/Componentes01/navbar";
import Footer from "../Inicio/Componentes01/footer";
import Cursinhos from "./Componentes/cursinhos";

function Cursos(){

    return(
        <div>
            <Navbar />
            <Cursinhos />
            <Footer />
        </div>
    )
}

export default Cursos;