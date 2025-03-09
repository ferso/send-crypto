// import { MainNavbar } from "../components/main-nav-bar/main-nav-bar";

import { MainNavbar } from "../components/main-nav-bar/main-nav-bar";

export interface IMainLayout {
  children?: React.ReactNode;
}
export const MainLayout: React.FC<IMainLayout> = (props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <MainNavbar
        auth={false}
        account={undefined}
        goToLogout={() => {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="max-w-6xl mx-auto">{props.children}</div>
    </div>
  );
};
