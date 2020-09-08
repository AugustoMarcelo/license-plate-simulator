import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type Props = {
  brand: 'honda' | 'volkswagen';
}

const Header: React.FC<Props> = ({ brand }) => {
  return (
    <Container brand={brand}>
      <div>
        <Link to="/">&larr;</Link>
        <h2>Simulador de Emplacamento</h2>
      </div>
    </Container>
  )
}

export default Header;
