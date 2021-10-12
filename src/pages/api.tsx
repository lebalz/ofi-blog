import React from "react";
import Layout from "@theme/Layout";
import { useStore } from "../stores/hooks";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Answer from "../components/Answer";

const Login = observer(() => {
  const [webKey, setWebKey] = React.useState("test");
  const msalStore = useStore("msalStore");
  const { account, loggedIn } = msalStore;
  const documentStore = useStore("documentStore");
  return (
    <Layout>
      <h1>API DEBUG</h1>
      <h1>{account ? account.username : "nope"}</h1>
      <div>
      <Answer webKey="325e83cb-e08f-4152-90a9-8d2b9e5a5590" type="text" />
      <Answer type="array" webKey="393422a8-c422-464e-94eb-dff929bc9346" label="Lösung F1" size={4} select={['', '↑', '↰', '↱']}/>
      <Answer type="string" webKey="a5e7d705-83bd-4076-b1b4-c4cf314eaef6" label="Blaa"/>

      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setWebKey(e.target.value)}
          defaultValue="test"
        />
      </div>
      <div>
        <button
          className={clsx("button", "button--primary", loggedIn && "disabled")}
          onClick={() => msalStore.login()}
        >
          Login
        </button>
        <button
          className={clsx("button", "button--primary", !loggedIn && "disabled")}
          onClick={() => msalStore.logout()}
        >
          Logout
        </button>
        <button
          className={clsx(
            "button",
            "button--secondary",
            !loggedIn && "disabled"
          )}
          onClick={() =>
            documentStore.getOrCreateDocument(webKey, {
              text: "bla",
              data: { a: 'bluu', data: {} }
            })
          }
        >
          Get
        </button>
        <button
          className={clsx(
            "button",
            "button--secondary",
            !loggedIn && "disabled"
          )}
          onClick={() =>
            documentStore.createOrUpdateDocument(webKey, {
              text: "blubber",
              data: { a: "blaa", b: Math.random() },
              keys: [1, 2, 3, 24],
            })
          }
        >
          Update
        </button>
        <button
          className={clsx("button", "button--danger", !loggedIn && "disabled")}
          onClick={() => documentStore.find(webKey)?.delete()}
        >
          Delete
        </button>
      </div>
      <h3>{webKey}</h3>
      <pre>
        <code>
          {JSON.stringify(documentStore.find(webKey)?.props || {}, undefined, 2)}
        </code>
      </pre>
    </Layout>
  );
});
export default Login;
