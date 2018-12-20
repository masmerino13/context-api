import Document from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
      debugger;
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
}