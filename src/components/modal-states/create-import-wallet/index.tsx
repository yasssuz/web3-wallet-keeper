// react or any other library related content
import { utils } from "ethers";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// styles
import {
  Container,
  DoNextButtons,
  EncryptedWalletContainer,
  EncryptingWalletContainer,
} from "./styles";

// components
import { WalletsContext } from "../../../contexts/wallets";
import Button from "../../shared/buttons";
import Input from "../../shared/input";
import Textarea from "../../shared/textarea";
import Heading from "../../shared/typography/heading";
import Text from "../../shared/typography/text";

// services and utils
import {
  createAndSafelyStoreWallet,
  getStoredEncryptedWallets,
  importAndSafelyStoreWallet,
} from "../../../utils/wallet";

// images

// types
type ImportOrCreateSelector =
  | { create: true; import?: never }
  | { import: true; create?: never };

type CreateOrImportWalletModalStateProps = {
  setIsModalOpen(state: boolean): void;
} & ImportOrCreateSelector;

// interfaces
interface FormProps {
  decryptionKey: string;
  mnemonicKey: string;
}

function CreateOrImportWalletModalState({
  setIsModalOpen,
  create,
}: CreateOrImportWalletModalStateProps) {
  const [walletEncryptionProgress, setWalletEncryptionProgress] =
      useState<number>(0),
    [walletData, setWalletData] = useState<{
      address: string;
      mnemonic: string;
    }>(),
    [errorMessage, setErrorMessage] = useState<string>();

  const { setStoredWalletsList } = useContext(WalletsContext),
    {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormProps>(),
    navigate = useNavigate();

  const onSubmit: SubmitHandler<FormProps> = async ({
    decryptionKey,
    mnemonicKey,
  }) => {
    let wallet;

    if (create) {
      wallet = await createAndSafelyStoreWallet(
        decryptionKey,
        followEncryptionProgress
      );
    } else {
      wallet = await importAndSafelyStoreWallet(
        mnemonicKey,
        decryptionKey,
        followEncryptionProgress
      );
    }

    // catch error
    if (typeof wallet === "string") {
      setErrorMessage(wallet);
      setWalletEncryptionProgress(0);
      return;
    }

    setStoredWalletsList(getStoredEncryptedWallets());
    setWalletData({
      address: wallet.address,
      mnemonic: wallet.mnemonic.phrase,
    });
  };

  function followEncryptionProgress(progress: number): void {
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
      setWalletEncryptionProgress(
        Number(
          progress.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })
        ) * 100
      );
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Heading as='h2' size='medium'>
        {create ? "Create New Wallet" : "Import Wallet"}
      </Heading>
      {(walletData && (
        <EncryptedWalletContainer>
          <Text as='p' size='large' weight='normal'>
            Good News! Your wallet was successfully{" "}
            {create ? "created" : "imported"} and encrypted.
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
            readOnly
          />
          <Text
            as='p'
            size='large'
            weight='bold'
            style={{ color: "var(--redPrimary)" }}
          >
            DO NOT share this phrase with anyone! These words can be used to
            steal all your funds.
          </Text>
          <Textarea
            id='mnemonic'
            name='mnemonic'
            label='Secret Recovery Phrase'
            value={walletData.mnemonic}
            error=' ' // keep error state active
            disabled
            readOnly
          />
          <DoNextButtons>
            <Link
              to={`/dashboard/${walletData.address}`}
              style={{ width: "100%", textDecoration: "none" }}
              reloadDocument
            >
              <Button variant='primary' size='medium' type='button'>
                Check new wallet
              </Button>
            </Link>
            <Button
              variant='secondary'
              type='button'
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </DoNextButtons>
        </EncryptedWalletContainer>
      )) ||
        (walletEncryptionProgress && (
          <EncryptingWalletContainer>
            <Text as='p' size='large' weight='normal'>
              {create
                ? "We just created your wallet!"
                : "We managed to import your wallet!"}
            </Text>
            <Text as='p' size='large' weight='normal'>
              Now wait while we encrypt it to make it secure and keep your
              finances away from bad people!
            </Text>
            <Heading as='h3' size='large'>
              {walletEncryptionProgress.toFixed(0)} %
            </Heading>
            <Heading as='h3' size='medium'>
              Encrypting...
            </Heading>
          </EncryptingWalletContainer>
        )) || (
          <>
            <Input
              id='decryptionKey'
              placeholder='e.g. Bin4nce1sC0ol!'
              label='Wallet Password'
              error={errors.decryptionKey?.message}
              {...register("decryptionKey", { required: "Can't be empty" })}
            />
            {!create && (
              <Textarea
                id='mnemonicKey'
                placeholder='separate each word with one single space'
                {...register("mnemonicKey", {
                  validate: e => {
                    if (!utils.isValidMnemonic(e))
                      return "Invalid Recovery Phrase";
                  },
                })}
                error={errors.mnemonicKey?.message}
                label='Secret Recovery Phrase (mnemonic)'
              />
            )}
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
            <Button variant='primary' size='medium' type='submit'>
              {create ? "Create Wallet" : "Import Wallet"}
            </Button>
          </>
        )}
    </Container>
  );
}

export default CreateOrImportWalletModalState;
