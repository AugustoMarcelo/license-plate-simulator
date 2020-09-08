import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    color: #fff;
    font-weight: 600;
    width: 100%;
    font-size: 3.6rem;
    padding: 2rem 5rem;
    background: var(--color-vw-blue);
    transition: opacity 0.2s;

    img {
      width: 10rem;
      height: 10rem;
    }

    &:hover {
      opacity: 0.9;
    }

    & + a {
      border-top: none;
      background: var(--color-honda-red);
    }
  }
`;
