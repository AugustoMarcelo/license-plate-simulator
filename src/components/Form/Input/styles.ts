import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
  }
`;
