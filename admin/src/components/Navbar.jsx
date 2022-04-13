import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import * as color from '../styles/Colors';

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Admin,</h4>
        <h1>
          Witaj w <span>KOZACKIEFURY !</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${color.white};
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: ${color.gold};
        font-family: "Advent Pro", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: ${color.lightDark};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: ${color.gold};
    }
    input {
      background-color: transparent;
      border: none;
      color: ${color.gold};
      font-family: "Advent Pro", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${color.gold};
        font-family: "Advent Pro", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
