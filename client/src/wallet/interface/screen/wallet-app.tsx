import { MainLayout } from "@core/interface/layouts/main.layout";
import { CardHome } from "../components/card-home/card-home";
import { SendCryptoForm } from "../components/send-crypto-form/send-crypto-form";
import { AnimatedBackground } from "@core/interface/components/animated-background";
import { HeroHome } from "../components/hero-home/hero-home";
export const WalletAppScreen = () => {
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
          />

          <SendCryptoForm />
        </div>
      </div>
    </MainLayout>
  );
};
