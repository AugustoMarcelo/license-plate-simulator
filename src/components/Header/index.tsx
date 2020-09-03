import React from 'react';

import { Container } from './styles';

type Props = {
  brand: 'honda' | 'volkswagen';
}

const Header: React.FC<Props> = ({ brand }) => {
  return (
    <Container brand={brand}>
      <h2>Simulador de Emplacamento</h2>
    </Container>
  )
}

export default Header;
