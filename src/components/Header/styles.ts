import styled from "styled-components";

type HeaderProps = {
  brand: "honda" | "volkswagen";
};

export const Container = styled.header<HeaderProps>`
  min-height: 15rem;
  width: 100%;
  background: ${({ brand }) =>
    brand === "volkswagen" ? "var(--color-vw-blue)" : "var(--color-honda-red)"};
  display: flex;
  align-items: flex-start;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90vw;
    max-width: 700px;
    margin-top: 2rem;

    > a {
      color: #fff;
      font-size: 2.6rem;
      transition: opacity 0.2s;
      margin-right: auto;

      &:hover {
        opacity: 0.7;
      }
    }

    h2 {
      color: #fff;
      font-size: 2.4rem;
      margin-right: auto;
    }

    @media (max-width: 700px) {
      margin-top: 1rem;
      text-align: center;
    }
  }
`;
