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

export const CardFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    line-height: 1.6rem;
  }

  strong {
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
`;
