import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/vw">Newtec</Link>
      <Link to="/honda">Honda</Link>
    </Container>
  )
}

export default Home;
