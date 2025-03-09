import { Link as RouterLink } from "react-router-dom";

import logo from "@assets/imgs/logo-navbar.png";

const pages = [
  {
    label: "Dashboard",
    icon: "",
    path: "/dashboard",
  },
  {
    label: "Transactions",
    icon: "",
    path: "/transactions",
  },
  {
    label: "Deposits",
    icon: "",
    path: "/deposits",
  },
];

export interface MainNavbarProps {
  auth: boolean;
  account: any;
  goToLogout: () => void;
}
export const MainNavbar: React.FC<MainNavbarProps> = (props) => {
  return (
    <nav className="bg-gray-900 fixed w-full top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <RouterLink to="/">
              <h4 className="text-orange-300 text-1xl font-bold">
                Crypto Wallet
              </h4>
            </RouterLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden  ">
            <div className="ml-10 flex items-center space-x-4">
              {pages.map((page) => (
                <RouterLink
                  key={page.path}
                  to={page.path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {page.label}
                </RouterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
