import styled from "@emotion/styled";
import { MediaQuery } from "../../utils/global";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: min-content 1fr;
  background: var(--secondaryBg);
  transition: height 0.3s ease, background 0.25s cubic-bezier(0.53, 0.21, 0, 1),
    border-bottom 0.25s cubic-bezier(0.53, 0.21, 0, 1);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  height: 96px;

  ${MediaQuery.md} {
    height: 81px;
  }

  ${MediaQuery.sm} {
    height: 64px;
  }
`;

export const LogoArea = styled.div<{ isSidebarOpen: boolean }>`
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 32px;
  width: ${props => (props.isSidebarOpen ? "300px" : "209px")};
  transition: width ${props => (props.isSidebarOpen ? "0.3s" : "0.5s")}
      cubic-bezier(0.53, 0.21, 0, 1)
      ${props => (props.isSidebarOpen ? "0.27s" : "0s")},
    padding-left 0.3s cubic-bezier(0.53, 0.21, 0, 1)
      ${props => (props.isSidebarOpen ? "0.27s" : "0s")},
    border-right 0.25s cubic-bezier(0.53, 0.21, 0, 1);

  ${MediaQuery.md} {
    width: ${props => (props.isSidebarOpen ? "261px" : "200px")};
    padding-left: 24px;
  }
`;

export const LogoDesktop = styled.svg`
  path {
    transition: fill 0.25s cubic-bezier(0.53, 0.21, 0, 1);
  }

  ${MediaQuery.sm} {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  display: none;

  ${MediaQuery.sm} {
    display: block;
  }
`;

export const InteractionArea = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 16px;

  h1 {
    margin-right: auto;
  }

  ${MediaQuery.md} {
    padding: 0 24px;
  }

  ${MediaQuery.sm} {
    padding: 0 16px 0 0;

    button:first-of-type {
      display: none;
    }

    button:nth-of-type(2) {
      display: grid;
      height: 32px;
    }
  }
`;

export const SettingsButton = styled.button`
  margin-left: 24px;
  line-height: 0;
  border: 0;
  background: none;
  cursor: pointer;

  ${MediaQuery.sm} {
    margin-left: 16px;
  }
`;
