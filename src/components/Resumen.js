import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helpers';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top:1rem;
`;

export const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;

    if( marca === '' || year === ''|| plan === '' ) return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {primeraMayuscula(year)}</li>
      </ul>
    </ContenedorResumen>
  );
};
Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}