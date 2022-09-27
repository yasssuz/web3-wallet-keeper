import styled from "@emotion/styled";
export const Container = styled.li`
  width: 330px;
  min-width: 330px;
`;

export const NetworkDataTopArea = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
`;

export const Circle = styled.span<{ color: string }>`
  width: 15px;
  min-width: 15px;
  height: 15px;
  min-height: 15px;
  background: ${props => props.color};
  border-radius: 50%;
`;
