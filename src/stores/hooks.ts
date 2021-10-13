import React from "react";
import { rootStore, storesContext } from "./stores";
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(typeof window === "undefined");

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof rootStore>(
  store: T
): typeof rootStore[T] => React.useContext(storesContext)[store];