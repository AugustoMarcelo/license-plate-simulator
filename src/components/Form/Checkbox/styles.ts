import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    @media (max-width: 700px) {
      margin-top: 1.4rem;
    }
  }

  label {
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`;
