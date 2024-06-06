import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Site from "./Inicio/home";
import Cursos from "./Todos Cursos/cursos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Site />} path="/"/>
                <Route element={<Cursos />} path="cursos"/>
            </Routes>
        </BrowserRouter>
    );

}

export default App;