import styled from "@emotion/styled";

export const OutletContainer = styled.div<{ isSidebarOpen: boolean }>`
  margin-left: ${props => (props.isSidebarOpen ? "300px" : "209px")};
  transition: margin-left 0.5s cubic-bezier(0.53, 0.21, 0, 1)
    ${props => (props.isSidebarOpen ? "0.25s" : "0s")};
`;
