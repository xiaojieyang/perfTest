import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// We need to include the base CSS in the root of
// the app so all of our components can inherit the styles
import { Dialog, Button } from "@neo4j-ndl/react";
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";
import React, { useState } from 'react';

export default function dialogpage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleOpenDialog() {
    setIsDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
  }

    return (
    <main className={styles.main}>
      <h1>Dialog</h1>
      <div className="n-flex n-flex-col n-items-center n-justify-center" style={{ height: '400px' }}>
        <React.Fragment key=".0">
          <div className="n-flex n-justify-center">
            <Button onClick={handleOpenDialog}>Open Dialog</Button>
          </div>
          <Dialog id="default-menu" onClose={handleCloseDialog} open={isDialogOpen}>
            <Dialog.Header>Header</Dialog.Header>
            <Dialog.Subtitle>This is a subtitle</Dialog.Subtitle>
            <Dialog.Description>This is a description</Dialog.Description>
            <Dialog.Actions>
              <Button color="neutral" fill="outlined" onClick={handleCloseDialog} size="large">
                Cancel
              </Button>
              <Button onClick={handleCloseDialog} size="large">
                Continue
              </Button>
            </Dialog.Actions>
          </Dialog>
        </React.Fragment>
      </div>
    </main>
  );
}

