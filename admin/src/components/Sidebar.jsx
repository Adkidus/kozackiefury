import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { FaAddressCard, FaCar, FaWpforms, FaCalendarAlt } from "react-icons/fa";
import {RiTeamFill} from 'react-icons/ri';
import { IoSettings, IoPricetags } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { logOut } from "../store/auth/actions";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const auth = useSelector((state) => state.auth);
  const isAdmin = auth.currentUser.role === 'admin';

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
      .brand,
      .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .links>ul>li:nth-of-type(8),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  const logout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
           <span>KOZACKIEFURY</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={location.pathname === '/' ? "active" : "none"}
              >
                <Link to='/'>
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={location.pathname.includes('/cars') ? "active" : "none"}
              >
                <Link to='/cars'>
                  <FaCar />
                  <span> Flota</span>
                </Link>
              </li>
              <li
                className={location.pathname.includes('reservations') ? "active" : "none"}
              >
                <Link to='/reservations'>
                  <FaAddressCard />
                  <span> Rezerwacje</span>
                </Link>
              </li>
              <li
                className={location.pathname.includes('calendar') ? "active" : "none"}
              >
                <Link to='/calendar'>
                  <FaCalendarAlt />
                  <span> Kalendarz</span>
                </Link>
              </li>
              {
                isAdmin ?
                <React.Fragment>
                  <li
                    className={location.pathname.includes('asks') ? "active" : "none"}
                  >
                    <Link to='/asks'>
                      <FaWpforms />
                      <span> Zapytania</span>
                    </Link>
                  </li>
                  <li
                    className={location.pathname.includes('offer') ? "active" : "none"}
                  >
                    <Link to='/offer'>
                      <IoPricetags />
                      <span> Oferta</span>
                    </Link>
                  </li>
                  <li
                    className={location.pathname.includes('team') ? "active" : "none"}
                  >
                    <Link to='/team'>
                      <RiTeamFill />
                      <span> Team</span>
                    </Link>
                  </li>
                </React.Fragment>
                :''
              }
              <li
                className={location.pathname.includes('settings') ? "active" : "none"}
              >
                <Link to='/settings'>
                  <IoSettings />
                  <span> Ustawienia</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <span onClick={logout}>
            <FiLogOut />
            <span className="logout">Wyloguj</span>
          </span>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={location.pathname === '/' ? "active" : "none"}
            >
              <Link to='/'>
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={location.pathname.includes('/cars') ? "active" : "none"}
            >
              <Link to='/cars'>
                <FaCar />
                <span> Flota</span>
              </Link>
            </li>
            <li
              className={location.pathname.includes('/reservations') ? "active" : "none"}
            >
              <Link to='/reservations'>
                <FaAddressCard />
                <span> Rezerwacje</span>
              </Link>
            </li>
            <li
              className={location.pathname.includes('/calendar') ? "active" : "none"}
            >
              <Link to='/reservations'>
                <FaCalendarAlt />
                <span> Calendar</span>
              </Link>
            </li>
            {
              isAdmin ?
              <React.Fragment>
                <li
                className={location.pathname.includes('/asks') ? "active" : "none"}
                >
                  <Link to='/asks'>
                    <FaWpforms />
                    <span> Zapytania</span>
                  </Link>
                </li> 
                <li
                  className={location.pathname.includes('/offer') ? "active" : "none"}
                >
                  <Link to='/offer'>
                    <IoPricetags />
                    <span> Oferta</span>
                  </Link>
                </li>
                <li
                  className={location.pathname.includes('/team') ? "active" : "none"}
                >
                  <Link to='/team'>
                    <RiTeamFill />
                    <span> Team</span>
                  </Link>
                </li>
              </React.Fragment>
              :''
            }
            <li
              className={location.pathname.includes('/settings') ? "active" : "none"}
            >
              <Link to='/settings'>
                <IoSettings />
                <span> Ustawienia</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #a3823a;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #a3823a;
        font-family: "Advent Pro", sans-serif;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: rgba(163, 130, 58, 0.4);
            /* a {
              color: black;
            } */
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #a3823a;
          a {
            color: #fff;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #a3823a;
    }
    span {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #a3823a;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #a3823a;
        a {
          color: black;
        }
      }
    }
  }
`;
