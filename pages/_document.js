import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lange="es-AR">
        {/* <Head> <Head/> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
