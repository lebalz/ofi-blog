import React from "react";
import clsx from "clsx";
import styles from "./login.module.scss";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { default as indexStyles } from "./index.module.css";
import { useStore } from "../stores/hooks";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", indexStyles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Login() {
  const msalStore = useStore("msalStore");
  const { account, loggedIn } = msalStore;
  return (
    <Layout description="OF Informatik Website by B. Hofer">
      <HomepageHeader />
      <main>
        <div className={styles.loginPage}>
          {loggedIn ? (
            <>
              <h3>Eingeloggt als {account.username}</h3>
              <button
                className="button button--danger"
                onClick={() => msalStore.logout()}
              >
                Logout
              </button>
            </>
          ) : (
          <button
            className="button button--warning"
            onClick={() => msalStore.login()}
          >
            Login mit GBSL Account
          </button>
          )}
        </div>
      </main>
    </Layout>
  );
}
