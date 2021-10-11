import React from "react";
import Layout from "@theme/Layout";
import { useStore } from "../stores/hooks";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import AnswerV2 from "../components/AnswerV2";
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
      <AnswerV2 id="blaabi" />
      <Answer id="blaabi" type="text" />
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
