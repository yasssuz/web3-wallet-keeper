import styled from "@emotion/styled";

export const Container = styled.form`
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

export const EncryptingWalletContainer = styled.div`
  p:first-of-type {
    margin-bottom: 8px;
  }

  h3 {
    text-align: center;
  }

  h3:first-of-type {
    margin-top: 24px;
  }
`;

export const EncryptedWalletContainer = styled.div`
  p:nth-of-type(2) {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  p:last-of-type {
    margin: 16px 0 8px;
  }
`;

export const DoNextButtons = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 16px;
  gap: 8px;
`;
