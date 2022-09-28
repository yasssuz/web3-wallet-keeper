// react or any other library related content
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

// styles
import {
  CloseModalButton,
  Container,
  DecryptedWalletContainer,
  DecryptingWalletContainer,
  RecoverForm,
  TopArea,
} from "./styles";

// components
import Button from "../../shared/buttons";
import Input from "../../shared/input";
import Textarea from "../../shared/textarea";
import Heading from "../../shared/typography/heading";
import Text from "../../shared/typography/text";

// services and utils
import {
  decryptJSONWallet,
  getStoredEncryptedWallets,
} from "../../../utils/wallet";

// images

// types
type RecoverWalletProps = {
  setIsModalOpen(state: boolean): void;
};

// interfaces
interface FormProps {
  decryptionKey: string;
}

function RecoverWallet({ setIsModalOpen }: RecoverWalletProps) {
  const [walletDecryptionProgress, setWalletDecryptionProgress] =
      useState<number>(0),
    [walletData, setWalletData] = useState<{
      address: string;
      mnemonic: string;
      privateKey: string;
    }>(),
    [errorMessage, setErrorMessage] = useState<string>();

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormProps>(),
    { address } = useParams();

  const onSubmit: SubmitHandler<FormProps> = async ({ decryptionKey }) => {
    const encryptedWallet = getStoredEncryptedWallets().find(
      wallet =>
        // wallet is being recognized as type Wallet, and JSON.parse expects a string.
        // unfortunately we can't overwrite it's type, so we need to use type any.
        "0x" + JSON.parse(wallet).address === address?.toLocaleLowerCase()
    );
    if (!encryptedWallet) return; // just making it type safe, as typescript expects string | undefined
    const decryptedWallet = await decryptJSONWallet(
      encryptedWallet,
      decryptionKey,
      followDecryptionProgress
    );

    // error catch
    if (typeof decryptedWallet === "string") {
      setWalletDecryptionProgress(0);
      setErrorMessage(decryptedWallet);
      return;
    }

    setWalletData({
      address: decryptedWallet.address,
      mnemonic: decryptedWallet.mnemonic.phrase,
      privateKey: decryptedWallet.privateKey,
    });
  };

  function followDecryptionProgress(progress: number): void {
    // reducing rendering amount from 3000/4000 to a little more than 200 renders.
    if (
      Number(
        progress.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })
      ) *
        100 >
      progress
    )
      setWalletDecryptionProgress(
        Number(
          progress.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })
        ) * 100
      );
  }

  // removing error message every time user type something.
  // not the best for re-renders, but considering that it's cheap to re-render this component
  // we don't need to optimize it!
  useEffect(() => {
    setErrorMessage("");
  }, [watch("decryptionKey")]);

  return (
    <Container>
      <TopArea>
        <Heading as='h2' size='medium'>
          Recover Wallet
        </Heading>
        <CloseModalButton type='button' onClick={() => setIsModalOpen(false)}>
          <img src='/icons/icon-cross.svg' alt='close sidebar' />
        </CloseModalButton>
      </TopArea>
      {(walletData && (
        <DecryptedWalletContainer>
          <Text as='p' size='large' weight='normal'>
            Good News! Your wallet was successfully decrypted.
          </Text>
          <Text as='p' size='large' weight='normal'>
            If you ever change browsers or move computers, you will need this
            Secret Recovery Phrase to access your wallet. Save them somewhere
            safe and secret.
          </Text>
          <Input
            id='address'
            name='address'
            label='Wallet Address'
            value={walletData.address}
            disabled
            readOnly
          />
          <Text
            as='p'
            size='large'
            weight='bold'
            style={{ color: "var(--redPrimary)" }}
          >
            DO NOT share your Secret Recovery Phrase or your Wallet Private Key
            with anyone! These words can be used to steal all your funds.
          </Text>
          <Input
            id='privateKey'
            name='privateKey'
            label='Wallet Private Key'
            error=' ' // keep error state active
            value={walletData.privateKey}
            disabled
            readOnly
          />
          <Textarea
            id='mnemonic'
            name='mnemonic'
            label='Secret Recovery Phrase'
            value={walletData.mnemonic}
            error=' ' // keep error state active
            disabled
            readOnly
          />
          <Button
            variant='secondary'
            type='button'
            size='medium'
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </Button>
        </DecryptedWalletContainer>
      )) ||
        (walletDecryptionProgress && (
          <DecryptingWalletContainer>
            <Text as='p' size='large' weight='normal'>
              We are decrypting your Wallet!
            </Text>
            <Text as='p' size='large' weight='normal'>
              This process may take a few seconds.
            </Text>
            <Heading as='h3' size='large'>
              {walletDecryptionProgress.toFixed(0)} %
            </Heading>
            <Heading as='h3' size='medium'>
              Decrypting...
            </Heading>
          </DecryptingWalletContainer>
        )) || (
          <RecoverForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              id='decryptionKey'
              placeholder='e.g. Bin4nce1sC0ol!'
              label='Wallet Password'
              error={errors.decryptionKey?.message}
              {...register("decryptionKey", { required: "Can't be empty" })}
            />
            {errorMessage && (
              <Text
                as='p'
                size='large'
                weight='normal'
                style={{ color: "var(--redPrimary)" }}
              >
                {errorMessage}
              </Text>
            )}
            <Button variant='tertiary' size='medium' type='submit'>
              Recover Wallet
            </Button>
          </RecoverForm>
        )}
    </Container>
  );
}

export default RecoverWallet;
