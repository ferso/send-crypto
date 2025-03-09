import { MainLayout } from "@core/interface/layouts/main.layout";
import { CardHome } from "../components/card-home/card-home";
import { SendCryptoForm } from "../components/send-crypto-form/send-crypto-form";
import { AnimatedBackground } from "@core/interface/components/animated-background";
import { HeroHome } from "../components/hero-home/hero-home";
import { MetaMaskSDK } from "@metamask/sdk";
import { useEffect } from "react";
import { useState } from "react";

export const WalletAppScreen = () => {
  const [isLoadingSdk, setIsLoadingSdk] = useState(false);
  const [sdk, setSdk] = useState<MetaMaskSDK | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);

  const init = async () => {
    setIsLoadingSdk(true);
    const sdk = new MetaMaskSDK({
      dappMetadata: {
        name: "Crypto Wallet",
        url: window.location.href,
      },
    });

    await sdk.init();
    setSdk(sdk);
    setIsLoadingSdk(false);
  };

  const GetAccounts = async () => {
    if (!sdk) {
      console.log("MetaMask is not installed");
      return;
    }

    const ethereum = sdk.getProvider();

    if (!ethereum) {
      console.log("MetaMask is not installed");
      return;
    }

    // Connect to MetaMask
    const accounts = await sdk.connect();

    // Make requests
    const result = await ethereum.request({
      method: "eth_accounts",
      params: [],
    });

    console.log(accounts, result);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <MainLayout>
      <AnimatedBackground />
      <div className="relative px-5 sm:pt-20 max-w-6xl mx-auto">
        <div className="relative isolate">
          <HeroHome />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 py-10 sm:py-0 ">
          <CardHome
            name={"Metamask"}
            address={undefined}
            network={"Ethereum"}
            amount={0}
            onConnect={GetAccounts}
            isLoading={isLoadingSdk}
          />

          <SendCryptoForm />
        </div>
      </div>
    </MainLayout>
  );
};
