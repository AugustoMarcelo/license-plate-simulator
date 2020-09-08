import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: fit-content;
  min-height: 11.5rem;
  background: #fff;
  border-radius: 0.8rem;
  border: 1px solid var(--color-line-in-white);
  padding: 1.6rem;
  transition: transform 0.2s;

  > div {
    padding: 1rem 0;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
