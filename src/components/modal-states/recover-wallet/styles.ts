import styled from "@emotion/styled";

export const Container = styled.section`
  gap: 20px;
  display: grid;
`;

export const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseModalButton = styled.button`
  line-height: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const RecoverForm = styled.form`
  gap: 20px;
  display: grid;
`;

export const DecryptingWalletContainer = styled.div`
  p {
    margin-bottom: 16px;
  }

  h3 {
    text-align: center;
  }
`;

export const DecryptedWalletContainer = styled.div`
  gap: 16px;
  display: grid;
`;
