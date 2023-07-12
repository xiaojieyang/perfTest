import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// We need to include the base CSS in the root of
// the app so all of our components can inherit the styles
import { LoadingSpinner } from "@neo4j-ndl/react";
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";

export default function labelpage() {
  return (
    <>
      <Head>
        <title>A Spinner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Spinner</h1>
        <LoadingSpinner size="large" />
      </main>
    </>
  )
}

