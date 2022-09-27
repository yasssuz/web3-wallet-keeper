import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuery } from "../../utils/global";

export const OpenSidebarButton = styled.button<{ isSidebarOpen: boolean }>`
  background: var(--purplePrimary);
  border-radius: 0px 100px 100px 0px;
  width: 56px;
  height: 48px;
  display: grid;
  place-content: center;
  border: 0;
  position: fixed;
  left: ${props => (props.isSidebarOpen ? "-56px" : "0px")};
  bottom: 32px;
  transition: left 0.3s cubic-bezier(0.53, 0.21, 0, 1)
    ${props => (props.isSidebarOpen ? "0s" : "0.4s")};
  cursor: pointer;
  overflow: hidden;

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &::before {
    content: "";
    position: absolute;
    height: 48px;
    width: 100%;
    background: var(--purpleSecondary);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  }
`;

export const SidebarContainer = styled.aside<{ isSidebarOpen: boolean }>`
  position: fixed;
  width: 300px;
  height: calc(100vh - 95px);
  bottom: 0;
  left: ${props => (props.isSidebarOpen ? "0px" : "-300px")};
  background: var(--secondaryBg);
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0 47px;
  transition: left 0.5s cubic-bezier(0.53, 0.21, 0, 1)
      ${props => (props.isSidebarOpen ? "0.25s" : "0s")},
    width 0.5s cubic-bezier(0.53, 0.21, 0, 1),
    height 0.5s cubic-bezier(0.53, 0.21, 0, 1),
    background 0.25s cubic-bezier(0.53, 0.21, 0, 1),
    border-right 0.25s cubic-bezier(0.53, 0.21, 0, 1);

  ${MediaQuery.md} {
    width: 261px;
    height: calc(100% - 80px);
  }

  ${MediaQuery.sm} {
    height: calc(100% - 63px);
  }
`;

export const TopArea = styled.section`
  & > strong {
    padding-left: 32px;
    margin-bottom: 19px;
    display: inline-block;
  }
`;

export const AddressList = styled.ul`
  list-style: none;
  padding-right: 24px;
`;

export const Address = styled.li<{ createAddress?: boolean }>`
  ${props =>
    props.createAddress &&
    css`
      span {
        color: var(--purplePrimary);
      }
    `}

  a,
  button {
    position: relative;
    text-decoration: none;
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 32px;
    transition: background-color 0.3s ease-out;
    overflow: hidden;
    background: transparent;
    border: none;
    cursor: pointer;

    span {
      transition: color 0.3s ease;
    }
  }

  a::before {
    content: "";
    background: var(--purplePrimary);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0px 100px 100px 0px;
    left: -100%;
    z-index: -1;
    transition: left 0.3s ease;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  a::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background: rgba(99, 95, 199, 0.1);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  }

  &.selected a {
    &::before {
      left: 0;
    }

    svg path {
      fill: var(--white);
    }

    span {
      color: var(--white) !important;
    }
  }
`;

export const BottomArea = styled.section`
  padding: 0 25px;
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 6px;
  background: var(--primaryBg);
  gap: 26px;

  input {
    display: none;
  }

  input:checked + label::before {
    left: 23px;
  }
`;

export const Switcher = styled.label`
  height: 20px;
  width: 40px;
  border-radius: 12px;
  background: var(--purplePrimary);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    background: var(--white);
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.2s cubic-bezier(0.53, 0.21, 0, 1);
  }
`;

export const HideSibebarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: var(--gray);
  margin-top: 22px;
  background: none;
  border: none;
  cursor: pointer;
`;
