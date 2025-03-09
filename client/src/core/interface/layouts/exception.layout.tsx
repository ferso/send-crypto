import { ReactNode } from "react";
export interface IMainLayout {
  children: ReactNode;
}
export const ExceptionLayout: React.FC<IMainLayout> = (props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ paddingTop: 3 }}>{props.children}</div>
    </div>
  );
};
