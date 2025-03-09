import { BrowserRouter } from "react-router-dom";
import { container } from "./infra/di/container";
import { AppRouter } from "./infra/router/app.router";
import { ApiProvider } from "./interface/providers/api.provider";
import { NotificationProvider } from "./interface/providers/notification.provider";

export const Core = () => {
  return (
    <BrowserRouter>
      <ApiProvider container={container}>
        <NotificationProvider>
          <AppRouter />
        </NotificationProvider>
      </ApiProvider>
    </BrowserRouter>
  );
};
