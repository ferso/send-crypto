import React, { useContext } from "react";
import { Container, interfaces } from "inversify";

export interface IApiProvider {
  children: React.ReactNode;
  container: Container;
}

const ApiContext = React.createContext<{ container: Container | null }>({
  container: null,
});

export const ApiProvider: React.FC<IApiProvider> = (props) => {
  return (
    <ApiContext.Provider value={{ container: props.container }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(ApiContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
