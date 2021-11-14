import React from "react";
import { MsalProvider } from "@azure/msal-react";

import { StoresProvider, rootStore } from "../stores/stores";
import { observer } from "mobx-react-lite";
import { msalConfig } from "../authConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import useIsBrowser from "@docusaurus/useIsBrowser";

const msalInstance = new PublicClientApplication(msalConfig);

const selectAccount = () => {
  /**
   * See here for more information on account retrieval:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
   */

  const currentAccounts = msalInstance.getAllAccounts();
  if (!currentAccounts || currentAccounts.length < 1) {
    return;
  } else if (currentAccounts.length > 1) {
    console.warn("Multiple accounts detected.");
    rootStore.msalStore.setAccount(currentAccounts[0]);
  } else if (currentAccounts.length === 1) {
    rootStore.msalStore.setAccount(currentAccounts[0]);
  }
};

const handleResponse = (response) => {
  /**
   * To see the full list of response object properties, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#response
   */
  rootStore.msalStore.setMsalInstance(msalInstance);
  if (response !== null) {
    rootStore.msalStore.setAccount(response.account);
  } else {
    selectAccount();
  }
};

msalInstance
  .handleRedirectPromise()
  .then(handleResponse)
  .catch((error) => {
    console.error(error);
  });

const Msal = observer(({ children }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
});

// Default implementation, that you can customize
function Root({ children }) {
  const isBrowser = useIsBrowser();
  if (isBrowser && !(window as any).store) {
    (window as any).store = rootStore;
  }
  return (
    <div>
      <StoresProvider value={rootStore}>
        <Msal>
          {children}
        </Msal>
      </StoresProvider>
    </div>
  );
}

export default Root;
