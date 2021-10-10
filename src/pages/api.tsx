import React from "react";
import Layout from "@theme/Layout";
import { useStore } from "../stores/hooks";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const msalStore = useStore("msalStore");
  const documentStore = useStore("documentStore");

  return (
    <Layout>
      <h1>API DEBUG</h1>
      <h1>{msalStore.account ? msalStore.account.username : "nope"}</h1>
      <div>
        <button
          className={clsx('button', 'button--primary', msalStore.loggedIn && 'disabled')}
          onClick={() =>
            msalStore.login()
          }
        >
          Login
        </button>
        <button
          className={clsx('button', 'button--primary', !msalStore.loggedIn && 'disabled')}
          onClick={() =>
            msalStore.logout()
          }
        >
          Logout
        </button>
        <button
          className={clsx('button', 'button--secondary', !msalStore.loggedIn && 'disabled')}
          onClick={() =>
            documentStore.loadDocument('test')
          }
        >
          Get
        </button>
        <button
          className={clsx('button', 'button--secondary', !msalStore.loggedIn && 'disabled')}
          onClick={() =>
            documentStore.createDocument('test', {text: 'blubber', data: {a: 'blaa', b: 13}, keys: [1,2,3,24]})
          }
        >
          Create
        </button>
        <button
          className={clsx('button', 'button--secondary', !msalStore.loggedIn && 'disabled')}
          onClick={() =>
            documentStore.updateDocument('test', {text: 'blubber', data: {a: 'blaa', b: Math.random()}, keys: [1,2,3,24]})
          }
        >
          Update
        </button>
        </div>
        <pre>
          <code>
            {JSON.stringify(documentStore.find('test') || {}, undefined, 2)}
          </code>
        </pre>
    </Layout>
  );
});
export default Login;
