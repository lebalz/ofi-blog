import React from "react";
import { MsalProvider } from "@azure/msal-react";

import { StoresProvider, rootStore } from "../stores/stores";
import { observer } from "mobx-react-lite";
import { msalConfig } from "../authConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Head from "@docusaurus/Head";
import siteConfig from '@generated/docusaurus.config';
import { usePluginData } from "@docusaurus/useGlobalData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { DocumentStore } from "../stores/DocumentStore";
const { OFFLINE_MODE, TEST_USERNAME } = siteConfig.customFields as { OFFLINE_MODE?: boolean, TEST_USERNAME?: string };

let msalInstance: PublicClientApplication;
let Msal = ({ children }) => <>{children}</>;
export const CommentContext = React.createContext(true);
export const CommentProvider = CommentContext.Provider;

if (!OFFLINE_MODE) {
    msalInstance = new PublicClientApplication(msalConfig);

    const selectAccount = () => {
        
        if (process?.env?.NODE_ENV !== 'production' && TEST_USERNAME) {
            rootStore.msalStore.setAccount({username: TEST_USERNAME} as any);
            return
        }
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

    Msal = observer(({ children }) => {
        return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
    });
}


const useTestUserNoAuth = process.env.NODE_ENV !== 'production' && TEST_USERNAME?.length > 0;

if (useTestUserNoAuth) {
  const n = TEST_USERNAME.length >= 40 ? 0 : 40 - TEST_USERNAME.length;
  console.log([   '',
                  "┌──────────────────────────────────────────────────────────┐",
                  '│                                                          │',
                  "│   _   _                       _   _                      │",
                  "│  | \\ | |           /\\        | | | |                     │",
                  "│  |  \\| | ___      /  \\  _   _| |_| |__                   │",
                  "│  | . ` |/ _ \\    / /\\ \\| | | | __| '_ \\                  │",
                  "│  | |\\  | (_) |  / ____ \\ |_| | |_| | | |                 │",
                  "│  |_| \\_|\\___/  /_/    \\_\\__,_|\\__|_| |_|                 │",
                  '│                                                          │',
                  '│                                                          │',
                  `│   TEST_USERNAME: ${TEST_USERNAME + ' '.repeat(n)}│`,
                  '│                                                          │',
                  '│   --> enable authentication by removing "TEST_USERNAME"  │',
                  '│       from the environment (or the .env file)            │',
                  "└──────────────────────────────────────────────────────────┘",
  ].join('\n'))
}



// Default implementation, that you can customize
function Root({ children }) {
    const {libDir, syncMaxOnceEvery} = usePluginData('docusaurus-live-brython') as { libDir: string; syncMaxOnceEvery: number; };
    const {siteConfig} = useDocusaurusContext();
    const isBrowser = useIsBrowser();
    React.useEffect(() => {
        /**
         * Expose the store to the window object
         */
        (window as any).store = rootStore;
        /**
         * Set some configuration options
         */
        DocumentStore.syncMaxOnceEvery = syncMaxOnceEvery;
        DocumentStore.libDir = libDir;
        DocumentStore.router = siteConfig.future.experimental_router;
    }, [rootStore]);
    return (
        <div>
            <Head>
                <meta property="og:description" content="Informatik Gymnasium Biel-Seeland" />
                <meta
                    property="og:image"
                    content="https://ofi.gbsl.website/img/og-preview.png"
                />
            </Head>
            <StoresProvider value={rootStore}>
                <Msal>
                    <CommentProvider value={true}>
                        {children}
                    </CommentProvider>
                </Msal>
            </StoresProvider>
        </div>
    );
}

export default Root;
