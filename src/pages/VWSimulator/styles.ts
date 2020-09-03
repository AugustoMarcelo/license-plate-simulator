import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: -5rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
