import React, { useState } from 'react';
import { Header } from './components/Header';
import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import { Resumen } from './components/Resumen';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';


// Styled components
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0px auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: '',
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  // Extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"  
     />

     <ContenedorFormulario>
      <Formulario
        guardarResumen={guardarResumen}
        guardarCargando={guardarCargando}
      />

    { cargando ? <Spinner /> : null}

      <Resumen
       datos={datos} 
      />

{/* Para que no se muestren las indicaciones cuando esté cargando */}
      { !cargando ?  
         <Resultado 
          cotizacion={cotizacion}
        /> : null }

     </ContenedorFormulario>
     
    </Contenedor>
  );
}

export default App;
