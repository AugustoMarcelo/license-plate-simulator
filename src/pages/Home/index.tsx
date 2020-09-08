import React from 'react';
import { Link } from 'react-router-dom';

import logoVW from '../../assets/logo_vw.jpg';
import logoHonda from '../../assets/logo_honda.png';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/vw">
        <img src={logoVW} alt="Símbolo da volkswagen branco com o plano de fundo azul" />
      </Link>
      <Link to="/honda">
        <img src={logoHonda} alt="Asas da honda com o nome Honda abaixo na cor branca" />
      </Link>
    </Container>
  )
}

export default Home;
