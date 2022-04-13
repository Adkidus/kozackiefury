import { css } from "styled-components";
import * as color from './Colors';

export const cardStyles = css`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: ${color.lightDark};
  color: ${color.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: ${color.gold};
      font-family: "Advent Pro", cursive;
      letter-spacing: 0.3rem;
    }
  }
`;