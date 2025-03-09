import { Routes, Route } from "react-router-dom";
import NotFoundRouteScreen from "../../interface/screens/not-found.screen";
import { WalletAppScreen } from "@wallet/interface/screen/wallet-app";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WalletAppScreen />} />
      <Route path="*" element={<NotFoundRouteScreen />} />
    </Routes>
  );
};
