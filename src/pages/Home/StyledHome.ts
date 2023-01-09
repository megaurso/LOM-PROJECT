import styled from "styled-components";

export const StyledDiv = styled.div`
  main {
    margin-top: 80px;

    position: relative;
  }

  .home_bg {
    height: 500px;

    background-image: url("https://i.imgur.com/X9E3vE9.jpeg");
    background-position: top center;
    background-size: cover;
  }

  .home_info {
    height: 500px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    box-shadow: inset 0px 0px 20px 30px var(--color-black-2);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .home_info div {
    width: 100%;
    height: 100%;
  }

  .home_info div > div {
    max-width: 450px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .home_info img {
    width: 200px;
  }

  .home_info h1 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .home_info h1 > span {
    font-size: 2.4rem;

    color: var(--color-brand-1);
  }

  .home_info p {
    font-weight: 400;
    font-size: 0.875rem;

    color: var(--color-white);
  }

  footer {
    margin: 0;
  }
`;
