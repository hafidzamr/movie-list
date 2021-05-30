import React from 'react';
import Document, { Html, DocumentContext, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): React.ReactElement {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="title" content="Movie - List" />
          <meta name="description" content="Movie - List" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hafidzamr.github.io/" />
          <meta property="og:title" content="Movie - List" />
          <meta property="og:description" content="Movie - List" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
