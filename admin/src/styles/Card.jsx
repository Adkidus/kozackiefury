import styled from "styled-components";
import * as color from './Colors';

export const Card = styled.section`
  padding: 2rem;
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

export const CardItem = styled.div`
  flex:50%;
  flex-grow: 0;
  display: flex;
  flex-flow: column;
  padding: .5rem;

  @media screen and (max-width: 780px) {
    flex:100%;
  }
`;
