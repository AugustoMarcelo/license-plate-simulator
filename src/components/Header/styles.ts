import styled from "styled-components";

type HeaderProps = {
  brand: "honda" | "volkswagen";
};

export const Container = styled.header<HeaderProps>`
  height: 15rem;
  width: 100%;
  background: ${({ brand }) =>
    brand === "volkswagen" ? "var(--color-vw-blue)" : "var(--color-honda-red)"};
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h2 {
    margin-top: 3rem;
    color: #fff;
    font-size: 2.4rem;

    @media(max-width: 700px) {
      width: 90vw;
      max-width: 700px;
      margin-top: 1.6rem;
      text-align: center;
    }
  }
`;
