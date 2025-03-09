import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInjection } from "./api.provider";
import { AuthContext } from "@auth/interface/providers/auth.provider";

const whitelist = ["/", "/signup", "/recovery"];

export interface IFunnelsProvider {
  children: React.ReactNode;
}
export const FunnelsContext = React.createContext<{}>({});
export const FunnelsProvider: React.FC<IFunnelsProvider> = (props) => {
  const { auth } = useContext<any>(AuthContext);
  const localStorage = useInjection<any>("LocalStorage");
  // const [, setLoadingFunnel] = useState<boolean>(true);
  const location = useLocation();
  let navigate = useNavigate();
  const getFunnelService = useInjection<any>("GetFunnelService");

  /**
   * Handles the funnel navigation logic for post-signup flow
   *
   * @description
   * This function manages the user navigation through defined funnels/steps:
   * 1. Gets the previous path from localStorage
   * 2. Sets loading state while fetching next funnel step
   * 3. Fetches the next funnel step for post-signup flow
   * 4. If a next step exists, checks:
   *    - If user is not already on the next step path
   *    - If current path is different from previous path
   *    - If current path is not in whitelist
   *    Then navigates to the next funnel step
   * 5. Finally sets loading to false
   *
   * @returns {Promise<void>}
   */
  const startFunnels = async (): Promise<void> => {
    // setLoadingFunnel(true);
    // const previousPath = localStorage.getItem("previousPath");
    const nextStep = await getFunnelService.getFunnel({
      type: "post-signup",
    });

    if (nextStep) {
      if (location.pathname !== `/${nextStep.name}`) {
        if (!whitelist.includes(location.pathname)) {
          return navigate(`/${nextStep.name}`, { replace: true });
        }
      }
    }
    // setLoadingFunnel(false);
  };

  useEffect(() => {
    if (location && auth) {
      startFunnels();
      localStorage.setItem("previousPath", location.pathname);
    }
  }, [location, auth]);

  return (
    <FunnelsContext.Provider value={{ startFunnels }}>
      {props.children}
    </FunnelsContext.Provider>
  );
};
