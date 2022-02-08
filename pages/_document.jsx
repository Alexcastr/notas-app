import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          src="https://kit.fontawesome.com/8c030f3850.js"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <about/>
        <NextScript />
      </body>
    </Html>
  );
}
