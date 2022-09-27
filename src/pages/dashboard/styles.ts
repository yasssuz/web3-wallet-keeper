import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuery } from "../../utils/global";

export const DashboardContainer = styled.main<{ isCentralized: boolean }>`
  display: grid;
  min-height: calc(100vh - 96px);

  ${MediaQuery.md} {
    min-height: calc(100vh - 81px);
  }

  ${MediaQuery.sm} {
    min-height: calc(100vh - 64px);
  }

  ${props =>
    props.isCentralized &&
    css`
      place-content: center;
    `}
`;
