import { closeSnackbar, enqueueSnackbar, SnackbarProvider } from "notistack";

import React, { useState } from "react";

export interface INotificationInput {
  message: string | React.ReactNode;
  value?: any;
}
export interface INotificationContext {
  useConfirm(input: IConfirmWindow): void;
  useErrorAlert(input: INotificationInput): void;
  useSuccessAlert(input: INotificationInput): void;
  useInfoAlert(input: INotificationInput): void;
  confirmValue: any;
}
export interface INotificationProvider {
  children: React.ReactNode;
}

const action = (snackbarId: any) => (
  <>
    <button
      style={{ color: "#fff" }}
      onClick={() => {
        closeSnackbar(snackbarId);
      }}
    >
      X
    </button>
  </>
);

interface IConfirmWindow extends INotificationInput {
  open: boolean;
  value: any;
  onClose(): void;
  onOk(value: any): void;
}
export const ConfirmWindow: React.FC<IConfirmWindow> = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2 id="alert-dialog-title">Confirm Action</h2>
        <div id="alert-dialog-description">
          {typeof props.message === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: props.message }} />
          ) : (
            props.message
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            props.onClose();
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            props.onOk(props.value);
          }}
          autoFocus
        >
          Continue
        </button>
      </div>
    </React.Fragment>
  );
};

export const useErrorAlert = (input: INotificationInput) => {
  enqueueSnackbar(input.message, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    action,
    variant: "error",
    preventDuplicate: true,
  });
};

export const useSuccessAlert = (input: INotificationInput) => {
  enqueueSnackbar(input.message, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    action,
    variant: "success",
    preventDuplicate: true,
  });
};

export const useInfoAlert = (input: INotificationInput) => {
  enqueueSnackbar(input.message, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    action,
    variant: "info",
    preventDuplicate: true,
  });
};

export const NotificationContext = React.createContext<
  Partial<INotificationContext>
>({});
export const NotificationProvider: React.FC<INotificationProvider> = (
  props
) => {
  const [confirmInput, setConfirmInput] = useState<IConfirmWindow>();
  const onCloseConfirm = () => {
    if (confirmInput) {
      confirmInput.open = false;
      setConfirmInput({ ...confirmInput });
    }
  };
  const useConfirm = (input: IConfirmWindow) => {
    setConfirmInput(input);
  };

  return (
    <NotificationContext.Provider
      value={{ useErrorAlert, useSuccessAlert, useConfirm, useInfoAlert }}
    >
      <SnackbarProvider>
        {/* <ConfirmWindow
          open={confirmInput?.open || false}
          value={confirmInput?.value}
          onClose={(): void => {
            onCloseConfirm();
            confirmInput?.onClose();
          }}
          onOk={(value: any): void => {
            confirmInput?.onOk(value);
            onCloseConfirm();
          }}
          message={confirmInput?.message || ""}
        /> */}
        {props.children}
      </SnackbarProvider>
    </NotificationContext.Provider>
  );
};
