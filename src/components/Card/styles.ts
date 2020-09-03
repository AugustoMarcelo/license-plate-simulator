import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 0.8rem;
  border: 1px solid var(--color-line-in-white);
  padding: 1.6rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(1rem);
  }

  header {
    font-size: 1.8rem;
  }

  strong {
    font-size: 3.6rem;
  }
`;
