import styled from "@emotion/styled";
import { m } from "framer-motion";
import { MediaQuery } from "../../../utils/global";

export const Overflow = styled(m.div)`
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  height: 100vh;
  width: 1000vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled(m.section)`
  position: fixed;
  z-index: 60;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  padding: 32px;
  width: 100%;
  border-radius: 6px;
  background: var(--secondaryBg);
  max-width: 480px;

  ${MediaQuery.sm} {
    padding: 24px;
    bottom: 0%;
    transform: translateX(-50%);
    border-radius: 10px 10px 0 0;
    max-width: unset;
  }
`;
