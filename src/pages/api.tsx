import React from "react";
import Layout from "@theme/Layout";
import { useStore } from "../stores/hooks";

export default function Login() {
  const msalStore = useStore("msalStore");
  const documentStore = useStore("documentStore");

  return (
    <Layout>
      <h1>API DEBUG</h1>
      <h1>{msalStore.account ? msalStore.account.username : "nope"}</h1>
        <button
          onClick={() =>
            documentStore.loadDocument('test')
          }
        >
          Get
        </button>
        <button
          onClick={() =>
            documentStore.createDocument('test', {text: 'blubber', data: {a: 'blaa', b: 13}, keys: [1,2,3,24]})
          }
        >
          Create
        </button>
        <button
          onClick={() =>
            documentStore.updateDocument('test', {text: 'blubber', data: {a: 'blaa', b: Math.random()}, keys: [1,2,3,24]})
          }
        >
          Update
        </button>
        <button
          onClick={() =>
            msalStore.login()
          }
        >
          Login
        </button>
        <button
          onClick={() =>
            msalStore.logout()
          }
        >
          Logout
        </button>
    </Layout>
  );
}
